const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MotionSchema = new Schema ({
    userId: String,
    properties: {
        camera: Boolean
    },
    images: Array,
    videos: Arrayt,
})

const Motion = mongoose.model('Motion', MotionSchema);

module.exports = Motion;