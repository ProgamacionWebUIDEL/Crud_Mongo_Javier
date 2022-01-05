const express = require('express'),
    router = express.Router(),
    pelicula = require('../Controlers/controler_Pelicula');

router.use('/Peliculas',pelicula);
module.exports = router;

