const scrape = require('website-scraper').default || require('website-scraper');

const options = {
    urls: ['https://hondmorvan.nl/'],
    directory: './downloaded-site',
    recursive: true,
    maxRecursiveDepth: 10,
    requestConcurrency: 3,
    sources: [
        { selector: 'img', attr: 'src' },
        { selector: 'img', attr: 'srcset' },
        { selector: 'link[rel="stylesheet"]', attr: 'href' },
        { selector: 'script', attr: 'src' },
        { selector: 'a', attr: 'href' },
        { selector: 'source', attr: 'src' },
        { selector: 'source', attr: 'srcset' },
        { selector: 'video', attr: 'src' },
        { selector: 'audio', attr: 'src' }
    ],
    urlFilter: (url) => {
        // Only download URLs from hondmorvan.nl domain
        return url.includes('hondmorvan.nl');
    },
    filenameGenerator: 'bySiteStructure',
    prettifyUrls: true,
    ignoreErrors: false,
};

console.log('Starting to download website: https://hondmorvan.nl/');
console.log('This may take several minutes...\n');

scrape(options).then((result) => {
    console.log('\n✓ Website downloaded successfully!');
    console.log(`Total files downloaded: ${result.length}`);
    console.log('Location: ./downloaded-site');
}).catch((error) => {
    console.error('Error downloading website:', error);
    process.exit(1);
});
