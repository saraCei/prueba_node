const express=require('express');
require('dotenv').config();
const {DBConnection}=require('./database/config')

// Configurar express
const app=express();
const port=3000;

// Conectar a BBDD
DBConnection();

// Configurar carpeta estática
app.use(express.static(__dirname+'/public'));

// Configurar template engines
app.set('view engine', 'ejs')  // motor de plantilla
app.set('views',__dirname+'/views') // especificar la ruta

app.use('/',require('./routers/router'))

app.listen(port,()=>{
    console.log(`servidor a la escucha del puerto ${port}`);
})