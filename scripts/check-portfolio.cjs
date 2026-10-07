const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.join(__dirname, '..');
const content = {};
new Function('exports', ts.transpile(fs.readFileSync(path.join(root, 'src/app/data/content.ts'), 'utf8'), { module: ts.ModuleKind.CommonJS }))(content);
assert.equal(content.JK_CONTACT.linkedinHref, 'https://www.linkedin.com/in/jawher-khiari-870805195');
assert.equal(content.JK_CONTACT.githubHref, 'https://github.com/jawher-khiari');
for (const [language, data] of Object.entries(content.JK_DATA)) {
  const carspare = data.projects.items.find(item => item.title === 'CarSpare');
  assert.equal(carspare.href, 'https://carspare.autos/');
  assert.match(carspare.points.join(' '), language === 'en' ? /In progress: Elasticsearch/ : /En cours : recherche Elasticsearch/);
  assert.equal(data.projects.items.length, 6);
  assert.equal(data.upcoming.items.length, 6);
  assert.equal(new Set(data.experience.items.map(item => item.role)).size, data.experience.items.length);
}
assert.deepEqual(Object.keys(content.JK_DATA.en), Object.keys(content.JK_DATA.fr));
function checkComponents(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { checkComponents(file); continue; }
    if (!entry.name.endsWith('.component.ts')) continue;
    const source = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(source, /\b(?:template|styles|style)\s*:/, file);
    for (const suffix of ['html', 'scss']) {
      const name = entry.name.replace(/\.ts$/, '.' + suffix);
      assert.ok(fs.existsSync(path.join(directory, name)), name);
      assert.ok(source.includes("'./" + name + "'"), name);
    }
  }
}
checkComponents(path.join(root, 'src/app'));
console.log('PASS: resume links, EN/FR project coverage, work-in-progress wording, and separate Angular component files.');
