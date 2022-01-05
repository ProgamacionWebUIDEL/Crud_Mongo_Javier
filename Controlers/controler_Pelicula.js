var pelicula = require('../Models/peliculas'),
    express = require('express'),
    router = express.Router();

router.post('/',(req,res)=>{
    pelicula.find({},(err,docs)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});

router.post('/crearPelicula',(req,res)=>{
    var body = req.body;
    pelicula.insertMany({
        nombre: body.nombre,
        direccot: body.direccot,
        anio_estreno: body.anio_estreno,
        idioma: body.idioma
    }, (err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/eliminarPelicula',(req,res)=>{
    pelicula.remove({
        nombre: req.body.nombre
    }, (err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/editarPelicula',(req,res)=>{
    var body = req.body;
    pelicula.updateMany({
        nombre: body.nombre
    },{
        $set:{
            nombre: body.nombre,
            direccot: body.direccot,
            anio_estreno: body.anio_estreno,
            idioma: body.idioma
        }
    },(err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
    
});

module.exports = router;
