const Country = require("../models/country");
const status = require("http-status")
const response = require("../config/message")
const State = require("../models/state")

exports.createCountry = async (req, res) => {
    return Country.create(req.body)
        .then(() => res.status(status.CREATED).send(response.message.CREATED))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.fetchCountry = async (req, res) => {
    return Country.find()
        .then((data) => {
            response.message.DATA_FOUND.data = data
            return res.status(status.FOUND).send(response.message.DATA_FOUND)
        })
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.updateCountry = async (req, res) => {
    const { country_name } = req.body;
    const _id = req.query._id

    return Country.findByIdAndUpdate(_id, { country_name })
        .then(() => res.status(status.OK).send(response.message.UPDATE))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.deleteCountry = async (req, res) => {
    const _id = req.query._id;

    const countryStates = await State.find();

    await Promise.all(countryStates.map(async (ele) => {
        return await State.findByIdAndDelete(ele._id)
    }))

    return Country.findByIdAndDelete(_id)
        .then(() => res.status(status.OK).send(response.message.DELETED))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}