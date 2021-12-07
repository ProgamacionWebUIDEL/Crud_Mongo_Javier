const express=require("express");
const app=express();


app.get("/Hola",(req,res)=>{
    var datos=(req.query);
    res.json({mensaje:"Hola "+datos.nombre});
});

app.get("/Suma",(req,res)=>{
    var datos=(req.query);
    var suma=Number(datos.n1)+Number(datos.n2);
    res.json({mensaje:"Resultado de la Suma: "+suma});
});

app.listen(3000,()=>{
    console.log("Servidor Iniciado")
});