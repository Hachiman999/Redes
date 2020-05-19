const { Router } = require('express'); 
const rutas = new Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//renderizamos la ruta inicial
rutas.get('/subir', (req,res)=>{
    res.render('index'); 
} );
//configuramos la peticion post con multer
rutas.post('/subir', multer({
    dest: path.join(__dirname, '../public'),
}).single('image'), (req, res, next) => {
    console.log(req.file);
    const ext = path.extname(req.file.originalname).toLocaleLowerCase();
    fs.rename(req.file.path, `./src/public/${req.file.originalname}`, () => {
        res.send('Subido');
    });
});
//configuramos la colleccion 
const collecion = multer.diskStorage({
    destination: path.join(__dirname, '../public'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})
//cargamos el archvio
const subirImagen = multer.diskStorage({
    collecion,
    limits: {fileSize: 1000000}
});

rutas.get('/imagenes',(req,res)=>{

})

module.exports = rutas; 