const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { to, TE }  = require('@service/util.service');

const departmentSchema = new Schema({
   _id: mongoose.Schema.Types.ObjectId,
   name: {type: String, required: true},
   manager: {type: String, required: true},
   isAdmin: {type: Boolean, required: true},
   right: {type: Array, required: false},
   childDepartments: {type: Array, required: false},
   updatedBy: {type: String, required: false},
   createdBy: {type: String, required: false},
},
{
    timestamps: true
});

module.exports = mongoose.model('Department', departmentSchema);