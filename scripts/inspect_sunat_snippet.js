const https = require('https');

https.get('https://tramitesperu.com/sunat/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Find where /sunat/ appears
    const idx = html.indexOf('/sunat/');
    if (idx !== -1) {
      console.log('Snippet around first /sunat/:');
      console.log(html.substring(idx - 100, idx + 300));
    }
    // Search JSON-LD scripts
    const scripts = html.split('<script type="application/ld+json">');
    console.log('Total JSON-LD scripts:', scripts.length - 1);
    for (let i = 1; i < scripts.length; i++) {
      const s = scripts[i].split('</script>')[0];
      try {
        const json = JSON.parse(s);
        if (json.itemListElement) {
          console.log(`Script ${i} itemListElement length:`, json.itemListElement.length);
          console.log('Item 0:', json.itemListElement[0]);
        }
      } catch (e) {}
    }
  });
});
