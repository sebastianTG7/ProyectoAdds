const https = require('https');

https.get('https://tramitesperu.com/sunat/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log('HTML length:', html.length);
    // Find all links to sunat procedures
    const links = [...html.matchAll(/href=["'](https:\/\/tramitesperu\.com\/sunat\/([a-z0-9-]+)\/?)["'][^>]*>(.*?)<\/a>/gi)];
    console.log('Direct <a> matches:', links.length);
    if (links.length > 0) {
      console.log('Sample links:');
      links.slice(0, 5).forEach(l => console.log(l[2], '=>', l[3].replace(/<[^>]+>/g, '').trim()));
    } else {
      // Let's search any occurrence of /sunat/
      const anySunat = [...html.matchAll(/https:\/\/tramitesperu\.com\/sunat\/[a-z0-9-]+\//g)].map(m => m[0]);
      console.log('Unique occurrences:', new Set(anySunat).size);
    }
  });
}).on('error', e => console.error(e));
