const https = require('https');

https.get('https://tramitesperu.com/reniec/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const scripts = html.split('<script type="application/ld+json">');
    console.log('Scripts count:', scripts.length);
    for (let i = 1; i < scripts.length; i++) {
      const content = scripts[i].split('</script>')[0];
      try {
        const parsed = JSON.parse(content);
        if (parsed['@type'] === 'CollectionPage' || parsed.itemListElement) {
          console.log('CollectionPage items:', parsed.itemListElement ? parsed.itemListElement.length : 0);
          console.log('First 3 items:', JSON.stringify(parsed.itemListElement?.slice(0, 3), null, 2));
        }
      } catch (e) {
        console.error('Parse error on script', i, e.message);
      }
    }
  });
}).on('error', (e) => {
  console.error('Fetch error:', e.message);
});
