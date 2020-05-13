const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname +"/public")); 
app.get('/', (req, res) =>{
    //se le dice que por defecto cargue index.html
    res.sendFile(__dirname+"/public/index.html");
    });

const PORT =80; 

http.listen(PORT ,()=>{
    console.log("iniciado")
});