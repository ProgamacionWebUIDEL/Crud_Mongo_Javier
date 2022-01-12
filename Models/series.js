var mongoose = require('mongoose');
Schema=mongoose.Schema;

var serieSchema = new mongoose.Schema({
    nombre:{type:String},
    director:{type:String},
    anio_estreno:{type:Number},
    idioma:{type:String},
    categoria:{type:String},
    temporadas:{type:String}
});

var serie = mongoose.model('serie',serieSchema);
module.exports=serie;