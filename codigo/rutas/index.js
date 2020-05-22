const {Router} = require('express'); 
const rutas = Router();  

const cGeneral = require('../controladores/cGeneral'); 
const cImagenes = require('../controladores/cImagenes'); 

module.exports =app=>{
    rutas.get('/', cGeneral.index); 
    rutas.get('/imagenes/:img_id', cImagenes.index); 
    rutas.post('/imagenes', cImagenes.crear); 
    rutas.post('/imagenes/:img_id/like', cImagenes.meGusta); 
    rutas.post('/imagenes/:img_id/comentario', cImagenes.comentario); 
    rutas.delete('/imagenes/:img_id', cImagenes.borrar);

    app.use(rutas);

    

}; 