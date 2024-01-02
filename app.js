//imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));

// set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/mainLayout.ejs');
app.set('view engine', 'ejs');

// Navigation
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', layout: './layouts/mainLayout.ejs' });
}); 
 
app.get('/cv', (req, res) => {
    res.render('cv', { title: 'CV', layout: './layouts/mainLayout.ejs' });
});

app.get('/education', (req, res) => {
    res.render('education', { title: 'Education',   layout: './layouts/mainLayout.ejs' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects',  layout: './layouts/mainLayout.ejs' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact',  layout: './layouts/mainLayout.ejs' });
});

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));