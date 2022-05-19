const express = require('express');
const router = express.Router();


router.get('/borracho', (req, res) => {
    res.render('./users/index', {boyaco:'Borracho'});
   /*  connection.query('SELECT * FROM `events-node`.`events`;', (err, result) => {
        if(err){
            throw err
        }else{
            res.send(result);
        }
    }); */
})
// index page
router.get('/', (req, res) =>{
    console.log("home");
    res.render('pages/index');
});
router.get('/about', (req, res) =>{
    console.log("Dashboard");
    res.render('pages/about');
});
router.get('/registro-producto', (req, res) =>{
    console.log("Dashboard");
    res.render('pages/registro-producto');
});
router.get('/dashboard', (req, res) =>{
    console.log("Dashboard");
    res.render('pages/dashboard');
});
// inicio page
router.get('/signin', (req, res) => {
    res.render('users/sign-in')
})

router.get('/create', (req, res) =>{
    console.log("create users");
    res.render('users/create');
    //res.render('users/create');
});


module.exports = router;