const mongoose = require("mongoose");

const country = new mongoose.Schema({
    country_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Country", country);