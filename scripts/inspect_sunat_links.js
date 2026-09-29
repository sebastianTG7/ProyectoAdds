const https = require('https');

https.get('https://tramitesperu.com/sunat/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Find all <a href="..."> inside main content
    const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    const links = [];
    while ((match = regex.exec(html)) !== null) {
      const href = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        links.push({ href, text });
      }
    }
    console.log('Total non-hash links:', links.length);
    const procedureLinks = links.filter(l => !l.href.includes('tramitesperu.com') && !l.href.startsWith('http') && !l.href.startsWith('/') && l.href.includes('/'));
    console.log('Sample relative procedure links:');
    console.log(links.slice(10, 30));
  });
});
