#!/bin/bash

# Script to remove unused images from the dist folder after build
# This script checks if image filenames are referenced anywhere in the built HTML/JS/CSS files
# and removes images that are not used

set -e

DIST_DIR="${1:-.}/dist"
IMAGES_DIR="$DIST_DIR/images"
TEMP_FILE=$(mktemp)

# Check if images directory exists
if [ ! -d "$IMAGES_DIR" ]; then
  echo "Error: Images directory not found at $IMAGES_DIR"
  exit 1
fi

echo "🔍 Scanning for unused images in $DIST_DIR..."
echo ""

# Get all image files (excluding directories)
UNUSED_COUNT=0
TOTAL_SIZE=0
REMOVED_SIZE=0

# Find all image files
find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" \) | while read image_file; do
  # Get just the filename
  filename=$(basename "$image_file")
  
  # Search for this filename in all HTML, JS, CSS, and XML files in dist
  if grep -r "$(printf '%s\n' "$filename" | sed 's/[[\.*^$()]/\\&/g')" "$DIST_DIR" --include="*.html" --include="*.js" --include="*.css" --include="*.xml" > /dev/null 2>&1; then
    # File is used
    :
  else
    # File is unused
    file_size=$(stat -f%z "$image_file" 2>/dev/null || stat -c%s "$image_file" 2>/dev/null || echo 0)
    file_size_mb=$(echo "scale=2; $file_size / 1048576" | bc)
    
    echo "❌ UNUSED: $filename ($file_size_mb MB)"
    
    # Remove the file
    rm -f "$image_file"
    
    REMOVED_SIZE=$((REMOVED_SIZE + file_size))
  fi
done

# Also check subdirectories for unused directories
find "$IMAGES_DIR" -maxdepth 1 -type d ! -name "images" | while read dir; do
  dirname=$(basename "$dir")
  if grep -r "/$dirname/" "$DIST_DIR" --include="*.html" --include="*.js" --include="*.css" --include="*.xml" > /dev/null 2>&1; then
    # Directory is used
    :
  else
    echo "❌ UNUSED DIRECTORY: $dirname"
    dir_size=$(du -sh "$dir" 2>/dev/null | awk '{print $1}')
    echo "   Removing directory with size: $dir_size"
    rm -rf "$dir"
  fi
done

echo ""
echo "✅ Cleanup completed!"

# Calculate current size
if [ -d "$IMAGES_DIR" ]; then
  current_size=$(du -sh "$IMAGES_DIR" | awk '{print $1}')
  echo "📊 Current images directory size: $current_size"
fi

if [ $REMOVED_SIZE -gt 0 ]; then
  removed_mb=$(echo "scale=2; $REMOVED_SIZE / 1048576" | bc)
  echo "💾 Space saved: ~${removed_mb} MB"
fi
