const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        uppercase: false,
        //required: true
    },
    empresa: {
        type: String,
        //required: true,
        trim: true,
    },
    cnpj: {
        type: String,
        //required: true,
        trim: true,
        //match: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/ // Regex para validar formato do CNPJ
    },
    email: {
        type: String,
        //required: true,
        trim: true,
        //match: /^\S+@\S+\.\S+$/ // Regex simples para validar formato de e-mail
    },
    telefone: {
        type: String,
        trim: true,
        //match: /^\(\d{2}\) \d{4,5}-\d{4}$/
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Fornecedor', schema);