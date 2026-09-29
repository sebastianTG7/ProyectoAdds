const fs = require('fs');

const rawCatalog = JSON.parse(fs.readFileSync('commits/raw_catalog_source.json', 'utf-8'));
const extracted = JSON.parse(fs.readFileSync('commits/all_extracted_tramites.json', 'utf-8'));

console.log('Existing in raw_catalog_source:', rawCatalog.tramites.length);
console.log('Total in all_extracted_tramites:', extracted.length);

const existingIds = new Set(rawCatalog.tramites.map(t => t.id));
const existingSlugs = new Set();
rawCatalog.tramites.forEach(t => {
  existingSlugs.add(t.id);
  const parts = t.id.split('-');
  existingSlugs.add(parts.slice(-2).join('-'));
});

let newToAdd = 0;
let duplicates = 0;

extracted.forEach(item => {
  const candidateId = `${item.entidad}-${item.slug}`.toLowerCase();
  const directSlug = item.slug.toLowerCase();

  if (existingIds.has(candidateId) || existingIds.has(directSlug)) {
    duplicates++;
  } else {
    newToAdd++;
  }
});

console.log('Duplicates / already existing:', duplicates);
console.log('New tramites to add:', newToAdd);
console.log('Projected total catalog size:', rawCatalog.tramites.length + newToAdd);
