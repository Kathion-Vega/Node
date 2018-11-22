const mongoose = require('mongoose');
const { Schema } = mongoose;


const personaSchema = new Schema({
   nombre: String,
   apellidos: {
       paterno: String,
       materno: String
   },
//   aqui debo de poner todo lo que hay que tener el objeto, apellidos: [String]
   edad: Number,

   peso: Number,
   ojos: {
       type: Number,
       default: 2
   }
});

mongoose.model('personas', personaSchema);