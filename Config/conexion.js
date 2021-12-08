var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb+srv://jav_ayora:XHvXAtXfFIs1Jx6J@cluster0.yjo7z.mongodb.net/Sistema?retryWrites=true&w=majority');

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado MongoDb');
});
module.exports=connection;