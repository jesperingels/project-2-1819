const express = require('express');
const compression = require('compression');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(compression());

app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.render('pages/index.ejs');
});


app.listen(port, () => console.log('App listening on port: ' + port));

