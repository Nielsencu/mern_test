const mongoose = require('mongoose');

const Realdata = require('./realdata.model').schema;
const Mlmodel = require('./mlmodel.model').schema;

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    realdatas: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Realdata"
        }]
    },
    mlmodel: {
        type: [Mlmodel]
    }
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;