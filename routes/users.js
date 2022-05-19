const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

const USERS = require('../controllers/users/selectAllUsers');

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