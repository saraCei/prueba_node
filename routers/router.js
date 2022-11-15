const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index', {
        titulo: 'Index desde views',
        descripcion: 'Esta es la descripcion del index'
    });

})

router.get('/servicios',(req,res)=>{
    // res.send('<h1>Servicio desde app</h1>');
    res.render('servicios',{
        titulo:'Servicios desde views',
        descripcion: 'esta es la descripcion de servicios',
        data:[
            {
                "nombre":"Servicio Uno",
                "comentario":"Este es el comentario del servicio uno"
            },
            {
                "nombre":"Servicio Dos",
                "comentario":"Este es el comentario del servicio dos"
            },
            {
                "nombre":"Servicio Tres",
                "comentario":"Este es el comentario del servicio tres"
            }
        ]
    })
})

module.exports=router;
