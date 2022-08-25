const State = require("../models/state");
const Country = require("../models/country")
const status = require("http-status")
const response = require("../config/message")

exports.createState = async (req, res) => {
    const CountryExist = await Country.findOne({ _id: req.body.country_id })
    if (!CountryExist?._id)
        return res.status(status.BAD_REQUEST).send(response.message.BAD_REQUEST)
    return State.create(req.body)
        .then(() => res.status(status.CREATED).send(response.message.CREATED))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.fetchState = async (req, res) => {
    return State.find()
        .then((data) => {
            response.message.DATA_FOUND.data = data
            return res.status(status.FOUND).send(response.message.DATA_FOUND)
        })
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.updateState = async (req, res) => {
    const { state_name, country_id } = req.body;
    const _id = req.query._id

    const CountryExist = await Country.findOne({ _id: req.body.country_id })
    if (!CountryExist?._id)
        return res.status(status.BAD_REQUEST).send(response.message.BAD_REQUEST)
    return State.findByIdAndUpdate(_id, { state_name, country_id })
        .then(() => res.status(status.OK).send(response.message.UPDATE))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.deleteState = async (req, res) => {
    const _id = req.query._id;

    return State.findByIdAndDelete(_id)
        .then(() => res.status(status.OK).send(response.message.DELETED))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}