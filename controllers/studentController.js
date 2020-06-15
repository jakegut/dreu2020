const Student = require('../models/student');

exports.getAllStudents = (req, res) => {
    Student
        .find({})
        .exec((err, docs) => {
            if(err)
                return res.json({message: "An error occured"})
            res.json({docs});
        });
}

exports.getOneStudentById = (req, res) => {
    Student.findById(req.params.id, (err, docs) => {
        if(err) return res.status(404).json({message: "Student not found"})
        res.json(docs);
    });
}

exports.getOneStudentByNetId = (req, res) => {
    Student.findOne({netid: req.params.netid}, (err, docs) => {
        if(err) return res.status(400).json(err);
        if(docs === null) return res.status(404).json({message: "Student not found with net id"})
        res.json(docs);
    });
}

exports.postOneStudent = (req, res) => {
    let {netid, firstName, lastName, email, classification, credits} = req.body;
    Student.create({netid, firstName, lastName, email, classification, credits}, (err, docs) => {
        if(err) return res.status(400).json(err);
        res.status(201).json({docs, message: "Student created"});
    });
}

exports.putOneStudent = (req, res) => {
    
}