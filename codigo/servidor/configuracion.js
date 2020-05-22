const path = require('path'); 
const hbs = require('express-handlebars'); 
const handlebars = require('handlebars');
const morgan = require('morgan'); 

const multer = require('multer'); 
const ex = require('express'); 

const errhandler = require('errorhandler'); 

const rutas = require('../rutas/index'); 
module.exports =app=>{
    //puerto a usar 
    app.set('port', 80 ); 
    app.set('views', path.join(__dirname, '../vistas')); 
    app.engine('.hbs', hbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'parciales'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        helpers: require('./helpers'),
        extname: '.hbs',
        handlebars: handlebars
    })); 
    app.set('view engine', '.hbs'); 

    //middlewares
    app.use(morgan('dev'));
    /*cuando envien el archivo le decimos que ponesmos en una ubicacion temporal */
    app.use(multer({
        dest: path.join(__dirname,'../publico/subido/temporal')
    }).single('imagen'));
    /* */
    app.use(ex.urlencoded({extended: false}));
    /** */
    app.use(ex.json()); 
    //rutas
    rutas(app); 
    //archivos o contenido estatico
    app.use('/publico',ex.static(path.join(__dirname, '../publico'))); 
    
    //Manejador de errores
    if('development'===app.get('env')){
        app.use(errhandler); 
    }
    
    return app; 
}