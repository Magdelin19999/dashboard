const express = require('express');
const path = require('path');//concatenar rutas o direcciones de directorios
const ejs = require('ejs');
const routes = require('./routes/users');

const app =express();
// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use(routes)


//static files
app.use(express.static('public'));
app.use(express.json());

// starting the server 
app.listen(process.env.PORT || 3000, () => {
    console.log(`http://localhost:${process.env.PORT || 3000}`)

});
