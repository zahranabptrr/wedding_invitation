const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Route halaman welcome
app.get('/', (req, res) => {
    res.render('welcome');
});

// Route halaman undangan
app.get('/invitation', (req, res) => {
    // Foto galeri: baca isi folder public/images
    const fs = require('fs');
    const imagesDir = path.join(__dirname, 'public', 'images');
    let images = [];
    if (fs.existsSync(imagesDir)) {
        images = fs.readdirSync(imagesDir).filter(file => {
            return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(path.extname(file).toLowerCase());
        });
    }
    res.render('index', {
        images,
        bride: 'Aqeele',
        groom: 'Mohan',
        date: '8 Agustus 2025',
        location: 'Hotel Westin Jakarta',
        locationUrl: 'https://maps.google.com/?q=Hotel+Westin+Jakarta'
    });
});

// Route halaman undangan per section
app.get('/invitation/couple', (req, res) => {
    res.render('couple', {
        bride: 'Aqeele',
        groom: 'Mohan',
        images: ['bride_aqeela.jpeg', 'bride_mohan.jpeg', 'aqeela.jpeg', 'Mohan.jpeg']
    });
});

app.get('/invitation/event', (req, res) => {
    res.render('event', {
        date: '8 Agustus 2025',
        location: 'Hotel Westin Jakarta',
        locationUrl: 'https://maps.google.com/?q=Hotel+Westin+Jakarta'
    });
});

app.get('/invitation/gallery', (req, res) => {
    const fs = require('fs');
    const path = require('path');
    const imagesDir = path.join(__dirname, 'public', 'images');
    let images = [];
    if (fs.existsSync(imagesDir)) {
        images = fs.readdirSync(imagesDir).filter(file => {
            return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(path.extname(file).toLowerCase());
        });
    }
    res.render('gallery', { images });
});

app.get('/invitation/rsvp', (req, res) => {
    res.render('rsvp');
});

// Endpoint RSVP
app.post('/rsvp', (req, res) => {
    const fs = require('fs');
    const rsvpFile = path.join(__dirname, 'rsvp.json');
    const { nama, jumlah, kehadiran } = req.body;
    let data = [];
    if (fs.existsSync(rsvpFile)) {
        data = JSON.parse(fs.readFileSync(rsvpFile));
    }
    data.push({ nama, jumlah, kehadiran, waktu: new Date().toISOString() });
    fs.writeFileSync(rsvpFile, JSON.stringify(data, null, 2));
    res.redirect('/sukses');
});

// Endpoint Wish Box
app.post('/wish', (req, res) => {
    const fs = require('fs');
    const wishFile = path.join(__dirname, 'wishes.json');
    const { nama, pesan } = req.body;
    let data = [];
    if (fs.existsSync(wishFile)) {
        data = JSON.parse(fs.readFileSync(wishFile));
    }
    data.push({ nama, pesan, waktu: new Date().toISOString() });
    fs.writeFileSync(wishFile, JSON.stringify(data, null, 2));
    res.redirect('/invitation?wish=success');
});

// Halaman sukses RSVP
app.get('/sukses', (req, res) => {
    res.send('<h2>Terima kasih sudah mengisi RSVP!</h2><a href="/invitation">Kembali ke undangan</a>');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${3000}`);
});
