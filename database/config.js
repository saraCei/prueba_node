const mongoose=require('mongoose');

// Conectar a BBDD
// const user= 'full';
// const pass= '1234';
// const dbName= 'pruebas-mongo';
// const uri=`mongodb+srv://full:1234@cluster0.xapnnpt.mongodb.net/pruebas-mongo?retryWrites=true&w=majority`

const DBConnection=async()=>{
    //mongoose.connect(uri)
    // .then((resp)=>console.log('conectado a la base de datos'))
    // .catch((error)=>{console.log(error)})
    try{
        //await mongoose.connect()
        await mongoose.connect(process.env.URI_DB)
        console.log('conectando a la base de datos')
    }catch (error){
        console.log('error al conectar con la base de datos');
        return({
            ok:false,
            msg:'Error al conectar con la base de datos'
        })
    }
}

module.exports={
    DBConnection
}