const fs = require('fs');
const path = require('path');
const https = require('https');

const downloadDir = path.join(__dirname, 'public', 'images', 'logos');
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, { recursive: true });

const baseHost = "https://green-chimpanzee-101056.hostingersite.com/wp-content/uploads/";

const logos = [
    { name: "anaclin", url: baseHost + "2022/09/anaclin-logo-1024x349-1-300x102.png" },
    { name: "dr-ana-paula", url: baseHost + "2022/09/Design_Dr_AnaPaula-300x95.png" },
    { name: "dra-isabe", url: baseHost + "2022/09/cropped-logotipo-Dra-Isabe-ai.png" },
    { name: "uroclinica", url: baseHost + "2022/09/Uroclinica_Logotipo-300x85.png" },
    { name: "flylink", url: baseHost + "2022/09/Clientes-Ange-Flylink.jpg" },
    { name: "shopping-moveis", url: baseHost + "2022/09/Clientes-Ange-Shopping-Moveis-Agua-Branca.jpg" },
    { name: "toriba-renault", url: baseHost + "2022/09/toriba-renault_2.png" },
    { name: "thereza-mussi", url: baseHost + "2022/09/logotipo-TherezaMussi_box-768x183-1-1-300x71.png" },
    { name: "agencia-wrk", url: baseHost + "2023/08/Agencia-WRK-AMARELO-ALARANJADO.webp" },
    { name: "logo-tap", url: baseHost + "2022/09/logo-tap-300x119.png" },
    { name: "onile", url: baseHost + "2022/09/cropped-Logo-Onile-1-1.png" },
    { name: "logo-oa", url: baseHost + "2022/09/logo-0A.svg" },
    { name: "logo-gen", url: baseHost + "2022/09/logo.png" },
    { name: "logo-lo", url: baseHost + "2022/09/logo-lo.png" },
    { name: "screenshot-30-08-1", url: baseHost + "2023/08/Captura-de-tela-de-2023-08-30-09-30-36.png" },
    { name: "screenshot-30-08-2", url: baseHost + "2023/08/Captura-de-tela-de-2023-08-30-09-33-02.png" },
    { name: "screenshot-30-08-3", url: baseHost + "2023/08/Captura-de-tela-de-2023-08-30-09-33-48.png" },
    { name: "screenshot-03-09-1", url: baseHost + "2022/09/Captura-de-tela-de-2022-09-03-13-47-26-300x140.png" },
    { name: "screenshot-03-09-2", url: baseHost + "2022/09/Captura-de-tela-de-2022-09-03-14-09-52.png" },
    { name: "screenshot-03-09-3", url: baseHost + "2022/09/Captura-de-tela-de-2022-09-03-14-07-29.png" },
    { name: "logo-site-2", url: baseHost + "2022/09/LOGO-SITE-2.png" },
    { name: "logo-png-alt", url: baseHost + "2022/09/logo_png-300x226.png" },
    { name: "logo-png-std", url: baseHost + "2022/09/logo-png.png" },
    { name: "screenshot-30-08-4", url: baseHost + "2023/08/Captura-de-tela-de-2023-08-30-09-26-20.png" },
    { name: "screenshot-30-08-5", url: baseHost + "2023/08/Captura-de-tela-de-2023-08-30-09-28-00.png" }
];

const download = (url, name) => {
    const ext = path.extname(url.split('?')[0]) || '.png';
    const filePath = path.join(downloadDir, `${name}${ext}`);
    const file = fs.createWriteStream(filePath);
    https.get(url, (res) => {
        res.pipe(file);
        file.on('finish', () => { file.close(); console.log(`✅ ${name} pronto.`); });
    }).on('error', (err) => { console.error(`❌ Erro em ${name}: ${err.message}`); });
};

console.log("🛠️ Baixando todos os 25 logos para public/images/logos/...");
logos.forEach(l => download(l.url, l.name));