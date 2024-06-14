var cancion = require('../models/cancion_model'),
        express=require('express'),
        router=express.Router();

router.post('/crear', (req, res)=>{
    var body = req.body;
    console.log("Llego hasta aqui");
    cancion.insertMany({
        nombre:body.nombre,
        autor:body.autor,
        interprete:body.interprete,
        genero:body.genero,
        duracion:body.duracion,
        fotografia:body.fotografia,
        letra:body.letra,
        anio:body.anio, 
    },).then(function (){
        res.status(200) .json("Datos guardados")
        console.log("Successfuly saved defult items to DB")
    })
    .catch(function (err) {
        console.log(err);
        throw err;
    });; 
});

module.exports=router;
