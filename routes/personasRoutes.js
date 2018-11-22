
const mongoose = require('mongoose');

// const personasMiddleware = require('../librerias/personasMiddlewares');
const { datosLlenos, tipoDato } = require('../librerias/personasMiddlewares');

require('../models/Persona');
const Persona = mongoose.model('personas');

module.exports = (app) => {

    app.get('/api/personas', async (req, res) => {
        try {
            const respuesta = await Persona.find({});
            res.send(respuesta);
        }
        catch (error) {
            res.send(error.message);
    }
    });

    app.get('/api/personas/:id', async (req, res) => {
        try {
            const respuest = await Persona.find({_id: req.params.id});
            res.send(respuesta);
        }
        catch (error) {
            res.send(error.message);
    }
});





    app.post(
        '/api/personas',
        datosLlenos,
        tipoDato,
        // personasMiddleware.datosLlenos,
        // personasMiddleware.tipoDato, 
        async (req, res) => {
            try{
                const nueva = new Persona(req.body);
                // Si la propiedad y la variable es la misma, nombre: nombre
                const respuesta = await nueva.save();
                return res.send(respuesta);
                // solo un res.send
            } 
            catch(error){
                res.send(error.message)
        }          
    }
    );

    app.post(
        '/api/personas/:identificador',
        datosLlenos,
        tipoDato, 
        async (req, res) => {
            try {
                const respuesta = await Persona.findOneAndUpdate(
                    { _id: req.params.identificador},
                     // es como si estructuro y destructuro en ..req.body, es en base de crear objetos desde un objeto, es para menuzar un objeto, para sacarlo a variables, porque no vas a mandar un objeto de un objeto.
                    req.body,
                    { new: true }
                ).exec();

                res.send(respuesta);
            }
            catch(error){
                res.send(error.message)
            }          
        }
    );

    app.delete('/api/personas/:id', async (req, res) => {
        try {
            const respuesta = await Persona.deleteOne({_id: req.params.id });
            res.send(respuesta);
        }
        catch(error){
            res.send(error.message);
        }
    })
};