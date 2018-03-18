const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  nome: String,
  email: String
});

mongoose.model('clientes', userSchema);
