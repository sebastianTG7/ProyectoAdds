const https = require('https');
const fs = require('fs');

const url = 'https://tramitesperu.com/sitemap.xml';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('commits/sitemap_full.xml', data, 'utf-8');
    const matches = [...data.matchAll(/<loc>(https:\/\/tramitesperu\.com\/[^<]+)<\/loc>/g)].map(m => m[1]);
    console.log('Total URLs found in sitemap:', matches.length);
    
    // Categorize URLs
    const categories = {};
    matches.forEach(u => {
      const path = u.replace('https://tramitesperu.com/', '').split('/')[0];
      categories[path] = (categories[path] || 0) + 1;
    });
    console.log('Breakdown by section/entity:');
    console.log(JSON.stringify(categories, null, 2));
    
    // Save all URLs to a list
    fs.writeFileSync('commits/all_site_urls.json', JSON.stringify(matches, null, 2), 'utf-8');
  });
}).on('error', (err) => {
  console.error('Error fetching sitemap:', err.message);
});
