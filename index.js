'use strict';

let express = require('express');
let exphbs = require('express-handlebars');
let bodyparser = require('body-parser');

let app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.use(bodyparser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/name', (req, res) => {
    res.render('index', {
        name: req.body.name
    });
});

app.listen(4000);
