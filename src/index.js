//externas a nodejs
const express = require('express');


const multer = require('multer');
const ejs = require('ejs'); 
const uuid = require('uuid/dist/v4');

//internas de nodejs
const path = require('path');

const app = express();//iniciamos el servidor



const http = require('http').Server(app);//aplicamos el protocolo http

//configuracion de uso para archivos estaticos
app.use(express.static(__dirname+'public'));


//Configuracion de rutas de archivos
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');

// Multer Middlwares - creatara un carpeta si esta no existe
app.use(multer({
    dest: path.join(__dirname, 'public'),
    fileFilter:(req,file,cb)=>{
        var tipo_archivo  = /jpeg|jpg|png|gif/;
        var mimetype = tipo_archivo.test(file.mimetype);
        var extencion = tipo_archivo.test(path.extname(file.originalname).toLowerCase()); 
        if(mimetype && extencion){ return cb(null, true); }
        else{cb( "error no es una formato de archivo permitido solo se reciben ->"+ tipo_archivo )}
       }, limits:{fileSize: 1000000}
     }    
    ).single('imagen'));


//configurar multer
const coleccion = multer.diskStorage({
   destination : path.join(__dirname, 'public'),
   filename:(req,file,cb)=>{
       cb(null,uuid() + path.extname(file.originalname)); 
   }
});
app.use(multer({coleccion}).single('imagen')); 

//rutas de navegacion
app.use(require('./Rutas/index.routes'));

app.get('/',(req,res)=>{
    res.render('index'); 
});


//iniciamos el servidor
const PORT =80; 


http.listen(PORT ,()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
});