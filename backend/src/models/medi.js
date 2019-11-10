const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicSchema = new Schema({
    nombre: { type: String, required: true },
    prospecto: { type: String, require: true},
    existencia: { type: Boolean, required: true },
    formafarma: [{ 
        type: Schema.Types.ObjectId,
        ref: 'formafarma'
        }],
    laboratorio: { type: String, require: true}
});

module.exports = mongoose.model('medic', medicSchema);