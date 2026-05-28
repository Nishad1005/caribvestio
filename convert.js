import fs from 'fs';
import path from 'path';

const sourceDir = 'C:/Users/nalaw/Desktop/Caribvestio/stitch_caribvestio_premium_uniform_platform/stitch_caribvestio_premium_uniform_platform';
const pagesDir = './src/pages';
fs.mkdirSync(pagesDir, { recursive: true });

const directories = [
  { dir: 'homepage_caribvestio', name: 'Home', path: '/' },
  { dir: 'about_caribvestio', name: 'About', path: '/about' },
  { dir: 'aura_caribe', name: 'AuraCaribe', path: '/aura-caribe' },
  { dir: 'bulk_orders_caribvestio', name: 'BulkOrders', path: '/bulk-orders' },
  { dir: 'contact_us_caribvestio', name: 'ContactUs', path: '/contact' },
  { dir: 'hospitality_collection_caribvestio', name: 'HospitalityCollection', path: '/hospitality-collection' },
  { dir: 'industries_served_caribvestio', name: 'IndustriesServed', path: '/industries' },
  { dir: 'shop_collections_caribvestio', name: 'ShopCollections', path: '/collections' },
  { dir: 'the_executive_suite_caribvestio', name: 'TheExecutiveSuite', path: '/executive-suite' },
  { dir: 'uniform_guide_blog_caribvestio', name: 'UniformGuideBlog', path: '/blog' }
];

function htmlToJSX(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/<!--/g, '{/*')
    .replace(/-->/g, '*/}')
    .replace(/<img(.*?)>/g, (match, p1) => {
        if(match.endsWith('/>')) return match;
        return `<img${p1}/>`;
    })
    .replace(/<input(.*?)>/g, (match, p1) => {
        if(match.endsWith('/>')) return match;
        return `<input${p1}/>`;
    })
    .replace(/<br>/g, '<br/>')
    .replace(/<hr>/g, '<hr/>')
    .replace(/style="(.*?)"/g, "style={{}} /* Fix manually if needed */")
    .replace(/for=/g, 'htmlFor=');
}

for (const { dir, name } of directories) {
  const codePath = path.join(sourceDir, dir, 'code.html');
  if (fs.existsSync(codePath)) {
    const html = fs.readFileSync(codePath, 'utf8');
    
    const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
    let mainContent = '';
    
    if (mainMatch) {
      mainContent = htmlToJSX(mainMatch[1]);
      const afterMain = html.split('</main>')[1];
      if (afterMain) {
         const extraMatch = afterMain.match(/<a class="fixed[\s\S]*?<\/a>/i);
         if (extraMatch) {
             mainContent += '\n' + htmlToJSX(extraMatch[0]);
         }
      }
    } else {
       console.log(`Could not find <main> in ${dir}`);
       mainContent = '<div>Content not found</div>';
    }

    const jsx = `export default function ${name}() {
  return (
    <>
      ${mainContent}
    </>
  );
}`;
    fs.writeFileSync(path.join(pagesDir, `${name}.jsx`), jsx);
    console.log(`Converted ${name}`);
  } else {
    console.log(`File not found: ${codePath}`);
  }
}

// Generate App.jsx
const appJsx = `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
${directories.map(d => `import ${d.name} from './pages/${d.name}';`).join('\n')}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
${directories.map(d => `          <Route path="${d.path}" element={<${d.name} />} />`).join('\n')}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}`;

fs.writeFileSync('./src/App.jsx', appJsx);
console.log('Generated App.jsx');

const mainJsx = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;
fs.writeFileSync('./src/main.jsx', mainJsx);
console.log('Generated main.jsx');
