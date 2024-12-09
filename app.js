const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

// Set the view engine to HBS
app.set('view engine', 'hbs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Register components directory
hbs.registerPartials(path.join(__dirname, 'views', 'gomponents'));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'SEO Ginsanity',
        heading: 'COMING SOON',
        subheading: 'COMING AGAIN SO SOON'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        heading: 'About SEO Ginsanity',
        content: 'OFFICE JOB HARD - nodemon test'
    });
});

// Start the server - node app.js | npm run dev
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
