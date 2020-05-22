const mon = require('mongoose');

const { Schema } = mon;

const path = require('path');
const esquemaImagen = new Schema({
    titulo: { type: String },
    descripcion: { type: String },
    nombreFile: { type: String },
    vistas: { type: Number, default: 0 },
    meGusta: { type: Number, default: 0 },
    fechaSubido: { type: Date, default: Date.now }
});

esquemaImagen.virtual('soloId').get(function() {
    
    return this.nombreFile.replace(path.extname(this.nombreFile), '');
});

module.exports = mon.model('imagen', esquemaImagen);