const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RealdataSchema = new Schema({
    url: {type: String, required: true,},
});

const Realdata = mongoose.model('realdata', RealdataSchema);

module.exports = Realdata;