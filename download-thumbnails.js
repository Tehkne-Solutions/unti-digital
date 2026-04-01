const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', 'testimonials');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const thumbs = [
    { name: "john-nascimento", url: "https://green-chimpanzee-101056.hostingersite.com/wp-content/uploads/2022/02/Captura-de-tela-de-2022-02-14-17-20-31.png" },
    { name: "wellington-leite", url: "https://i.ytimg.com/vi_webp/mC-6CWCIIT0/hqdefault.webp" },
    { name: "andre-luis", url: "https://green-chimpanzee-101056.hostingersite.com/wp-content/uploads/2022/06/Captura-de-tela-de-2022-06-03-10-40-56-1.png" }
];

thumbs.forEach(t => {
    const file = fs.createWriteStream(path.join(dir, `${t.name}.png`));
    https.get(t.url, (res) => res.pipe(file));
});
console.log("🚀 Thumbnails baixadas com sucesso!");