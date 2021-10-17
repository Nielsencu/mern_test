const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MlmodelSchema = new Schema({
    parameters:{
        type: {
            batchsize : {type: Number, required: true},
            trainingcycles : {type: Number, required: true},
        },
        required: true,
    },
    syntheticdata:{
        type: [String]
    },
    project : {type: Schema.ObjectId, required:true,}
});

const Mlmodel = mongoose.model('mlmodel', MlmodelSchema);

module.exports = Mlmodel;