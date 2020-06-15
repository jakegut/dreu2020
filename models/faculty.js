const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model("Faculty", facultySchema);