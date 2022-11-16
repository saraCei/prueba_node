const express=require('express');
const router=express.Router()
const {leerServicios}=require('../controllers/serviciosController')

const leerServicios = async(req,res)=>{

    try{
        const servicios=await Servicio.find().exec()
            // res.send('<h1>Servicio desde app</h1>');
        res.render('servicios',{
            titulo:'Servicios desde views',
            descripcion: 'esta es la descripcion de servicios',
            data: servicios
            // data:[
            //     {
            //         "nombre":"Servicio Uno",
            //         "comentario":"Este es el comentario del servicio uno"
            //     },
            //     {
            //         "nombre":"Servicio Dos",
            //         "comentario":"Este es el comentario del servicio dos"
            //     },
            //     {
            //         "nombre":"Servicio Tres",
            //         "comentario":"Este es el comentario del servicio tres"
            //     }
            // ]
        })
    }catch(error){
        return{
            ok:false,
            msg:'Error al leer los servicios'
        }
    }


}

router.get('/servicios',leerServicios)
module.exports=router;
