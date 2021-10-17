const router = require('express').Router();
let Mlmodel = require('../models/mlmodel.model');

router.route('/').get((req,res) => {
    Mlmodel.find()
        .then(mlmodels => res.json(mlmodels))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const syntheticData = req.body.syntheticdata;
    const parameters = req.body.parameters;
    
    const newMlmodel = new Mlmodel({
        syntheticData,
        parameters,
    });

    newMlmodel.save()
        .then(() => res.json('ML Model added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;