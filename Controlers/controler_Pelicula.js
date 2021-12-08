var pelicula = require('../Models/peliculas'),
    express = require('express'),
    router = express.Router();

router.get('/',(req,res)=>{
    pelicula.find({},(err,docs)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});

module.exports = router;
