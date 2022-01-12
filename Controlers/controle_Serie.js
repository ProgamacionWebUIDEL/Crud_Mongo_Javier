var serie = require('../Models/series'),
    express = require('express'),
    router = express.Router();

router.post('/',(req,res)=>{
    serie.find({},(err,docs)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});

router.post('/crearSerie',(req,res)=>{
    var body = req.body;
    serie.insertMany({
        nombre: body.nombre,
        director: body.direccot,
        anio_estreno: body.anio_estreno,
        idioma: body.idioma,
        categoria: body.categoria,
        temporadas: body.temporadas
    }, (err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/eliminarSerie',(req,res)=>{
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

router.post('/editarSerie',(req,res)=>{
    var body = req.body;
    pelicula.updateMany({
        nombre: body.nombre
    },{
        $set:{
            nombre: body.nombre,
            director: body.direccot,
            anio_estreno: body.anio_estreno,
            idioma: body.idioma,
            categoria: body.categoria,
            temporadas: body.temporadas
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