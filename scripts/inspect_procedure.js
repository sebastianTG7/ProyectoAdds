const https = require('https');

https.get('https://tramitesperu.com/reniec/duplicado-dni/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Check title, description, json-ld
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    const metaDesc = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    console.log('Title:', titleMatch ? titleMatch[1] : null);
    console.log('Desc:', metaDesc ? metaDesc[1] : null);

    const scripts = html.split('<script type="application/ld+json">');
    console.log('JSON-LD scripts:', scripts.length - 1);
    for (let i = 1; i < scripts.length; i++) {
      const content = scripts[i].split('</script>')[0];
      try {
        const parsed = JSON.parse(content);
        console.log(`Script ${i} @type:`, parsed['@type']);
        if (parsed['@type'] === 'HowTo') {
          console.log('HowTo name:', parsed.name);
          console.log('HowTo totalTime / estimatedCost:', parsed.totalTime, parsed.estimatedCost);
          console.log('HowTo step count:', parsed.step?.length);
          if (parsed.step) {
            console.log('Steps:', parsed.step.map(s => s.name || s.text));
          }
        }
      } catch (e) {}
    }
  });
}).on('error', (e) => {
  console.error('Error:', e.message);
});
