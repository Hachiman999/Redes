const ex = require('express'); 
const fs = require('fs'); 
const path = require('path'); 

const configuracion = require('./servidor/configuracion')
const app = configuracion(ex()); 
//conexion a la base dedatos
const baseDatos = require('./baseDatos'); 
const http = require('http').Server(app); 
const dire ='client'
//const op = {
  //  cert: fs.readFileSync(path.join(__dirname,'/ssl' ))
//}


http.listen(app.get('port') , ()=>{
    console.log(`Servidor iniciado en ${app.get('port')}`);
}); 