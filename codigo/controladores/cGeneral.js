const { imagendb } = require('../modelos_datos/index');

const controlador = {

};

controlador.index = async (req, res) => {
    const imagenes = await imagendb.find().sort({ fechaSubido: -1 });
    //console.log(imagenes.nombreFile); 
    res.render('index', { imagenes:imagenes });
}

module.exports = controlador; 