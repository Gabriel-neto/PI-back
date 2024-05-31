const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    produto: {
        type: String,
        trim: true,
        upperCase: true, 
        required: true,
    },
    preco: {
        type: Number,
        min: 0
    },
    quantidade: {
        type: Number,
        min: 0
    },
    data: {
        type: Date,
    },
    vendedor: {
        type: String,
        trim: true,
        upperCase: true, 
        required: true,
    },
    nf: {
        type: Number,
        trim: true,
        required: true,
    }
});

module.exports = mongoose.model('Compra', compraSchema);