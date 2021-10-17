const router = require('express').Router();
let Project = require('../models/project.model');
let Realdata = require('../models/realdata.model');

router.route('/').get((req,res) => {
    const projectId = req.body.projectId;

    Project.findById(projectId)
    .then(project => res.json(project.populate("realdatas")))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const projectId = req.body.projectId;
    const newRealdata = new Realdata({url : req.body.realdata});

    newRealdata.save()
    .then(() => {
        Project.findByIdAndUpdate(
            projectId,
            {$push: {realdatas: newRealdata._id}},
            {new: true},
        )
        .then((project) => {
            if(!project){
                const e = new Error(`Project with ${projectId} is not found.`)
                throw e;
            }
            return res.json(`Realdata now is ${project.realdatas}`);
        })
        .catch(err => res.status(400).json('Error: ' + err));

    }).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Project.findByIdAndUpdate(
        projectId,
        {
            $push: {
                realdata: newRealdata
            }
        },
        {new: true},
    )
    .then((project) => {
        if(!project){
            const e = new Error(`Project with ${projectId} is not found.`)
            throw e;
        }
        return res.json(`Realdata now is ${project.realdata}`);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;