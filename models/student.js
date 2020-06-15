const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    netid: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    classification: {
        type: String,
        default: "UG"
    },
    credits: {
        type: Number,
        default: 0,
        min: 0
    },
    classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model("Student", studentSchema);