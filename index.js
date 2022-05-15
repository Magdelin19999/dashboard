const express = require('express');
const path = require('path');//concatenar rutas o direcciones de directorios
const ejs = require('ejs');
const {connectDB} = require('./DB');
const Users = require('./models/user')

const app =express();

connectDB();

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
//app.get('/saludo', (req,res) => res.send("Hello World saludo"));
app.get('/saludo', async (req,res) =>{
    const users = await Users.find();
    res.json(users);
});

app.get('/profile',(req, res) =>{
    res.render('profile',{
        name:'jeison',
        age:23
    })
})
//static files
app.use(express.static('public'))

// starting the server 
app.listen(process.env.PORT || 3000);
console.log(`Server on port ${process.env.PORT || 3000}`)
