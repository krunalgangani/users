const mongoose = require("mongoose");

const state = new mongoose.Schema({
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: true,
    },
    state_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("State", state);