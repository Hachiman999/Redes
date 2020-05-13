const express = require('express');
const path = require('path')
//const ejs = require('ejs'); 
const multer = require('multer')

const app = express();//iniciamos el servidor

const http = require('http').Server(app);//aplicamos el protocolo http

//configuracion de uso
app.use(express.static(__dirname+'public'));


//Configuracion de rutas de archivos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

//configurar multer
const coleccion = multer.diskStorage({
    filename: (req,file,cb)=>{
        cb(null, file.originalname)
    }
});

//procesamiento de la imagen
const subida = multer({
    dest:path.join(__dirname,'/public/')
}).single('image');


//Configuracion de rutas del servidor
app.get('/', (req, res) =>{
    //se le dice que por defecto cargue index.html
    res.render('index'); 
    });


app.post('/subir',subida, (req, res) =>{
   console.log(req.file);
    res.send('subido');
});



//iniciamos el servidor
const PORT =80; 


http.listen(PORT ,()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
});