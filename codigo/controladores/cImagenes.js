const path = require('path');

const { randomNumero } = require('../c_reuntilizable/libs');

const fs = require('fs-extra');

const { imagendb } = require('../modelos_datos/index');

const controlador = {};
controlador.index = async (req, res) => {
    const img = await imagendb.findOne({ nombreFile: { $regex: req.params.img_id } });
    //  console.log(img); 
    res.render('imagen',{img});
};
controlador.crear = (req, res) => {
    console.log(1);
    const guarImagen = async () => {
        const imgURL = randomNumero();
        const imagenesbuscadas = await imagendb.find({ nombreFile: imgURL });
        if (imagenesbuscadas.length > 0) {
            guarImagen();
        } else {
            // console.log(imgURL); 
            const dirImagenTem = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const destino = path.resolve(`codigo/publico/subido/${imgURL}${ext}`);
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                await fs.rename(dirImagenTem, destino);
                const nuevoImg = new imagendb({
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    nombreFile: imgURL + ext
                });
                const guardarImagen = await nuevoImg.save();
                res.redirect('/imagenes/'+mgURL);
                
            } else {
                await fs.unlink(dirImagenTem);
                res.status(500).json({ error: 'solo imagenes jpg, png o gif' });
            }

        }

    };
    guarImagen();


};
controlador.meGusta = (req, res) => {

};
controlador.comentario = (req, res) => {
    console.log(req.body); 
};
controlador.borrar = (req, res) => {

};
module.exports = controlador; 