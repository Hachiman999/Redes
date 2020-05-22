const mon = require('mongoose'); 
const {Schema, model} = mon; 
const {ObjectId} = Schema; 

const esComentario = new Schema({
    id_Imagen:{type: ObjectId}, 
    correo :{type : String},
    nombre:{type: String}, 
    comentario:{type: String},
    fechaSubido: { type: Date, default: Date.now }
});

module.exports = model('comentario', esComentario); 