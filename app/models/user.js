const mongoose = require("mongoose");

const user = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
        required: true,
        maxLength: 10
    },
    date_of_birth: {
        type: Date,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: true
    },
    state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true
    }
});

module.exports = mongoose.model("User", user);