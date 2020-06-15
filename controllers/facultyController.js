const Faculty = require('../models/faculty');

exports.getAllFaculty = (req, res) => {
    Faculty.find({}, (err, docs) => {
        if(err) res.status(400).json(err);
        res.json({docs});
    });
}

exports.getOneFaculty = (req, res) => {
    Faculty.findById(req.params.id, (err, docs) => {
        if(err) return res.status(404).json({message: "Faculty not found"});
        return res.json(docs);
    });
}

exports.postOneFaculty = (req, res) => {
    let {firstName, lastName, email, department} = req.body;
    Faculty.create({firstName, lastName, email, department}, (err, docs) => {
        if(err) return res.status(400).json(err);
        res.status(201).json({docs, message: "Faculty created"})
    });
};