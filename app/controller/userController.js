const User = require("../models/user");
const Country = require("../models/country");
const State = require("../models/state");
const status = require("http-status")
const response = require("../config/message")

exports.createUser = async (req, res) => {
    if (req.file) {
        const b64 = Buffer.from(req.file.buffer).toString('base64')
        const mimeType = 'image/png';
        const image = `data:${mimeType};base64,${b64}`
        req.body.image = image
    }
    const CountryExist = await Country.findOne({ _id: req.body.country_id })
    if (!CountryExist?._id)
        return res.status(status.BAD_REQUEST).send(response.message.BAD_REQUEST)

    const StateExist = await State.findOne({ _id: req.body.state_id })
    if (!StateExist?._id)
        return res.status(status.BAD_REQUEST).send(response.message.BAD_REQUEST)
    return User.create(req.body)
        .then(() => res.status(status.CREATED).send(response.message.CREATED))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.fetchUser = async (req, res) => {
    return User.find()
        .then((data) => {
            response.message.DATA_FOUND.data = data
            return res.status(status.FOUND).send(response.message.DATA_FOUND)
        })
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.updateUser = async (req, res) => {

    if (req.file) {
        const b64 = Buffer.from(req.file.buffer).toString('base64')
        const mimeType = 'image/png';
        const image = `data:${mimeType};base64,${b64}`
        req.body.image = image
    }

    const { _id, user_name, email, contact_no, country_id, state_id } = req.body;

    const updateObj = { user_name, email, contact_no, country_id, state_id };
    if (req.body.image) updateObj.image = req.body.image
    if (req.body.date_of_birth) updateObj.date_of_birth = req.body.date_of_birth

    const CountryExist = await Country.findOne({ _id : country_id})

    if (!CountryExist?._id)
        return res.status(status.BAD_REQUEST).send(response.message.BAD_REQUEST)

    const StateExist = await State.findOne({ _id: state_id })
    if (!StateExist?._id)
        return res.status(status.BAD_REQUEST).send(response.message.BAD_REQUEST)

    return User.findByIdAndUpdate(_id, updateObj)
        .then(() => res.status(status.OK).send(response.message.UPDATE))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}

exports.deleteUser = async (req, res) => {
    const _id = req.query._id;

    return User.findByIdAndDelete(_id)
        .then(() => res.status(status.OK).send(response.message.DELETED))
        .catch((err) => res.status(status.INTERNAL_SERVER_ERROR).send(err));
}