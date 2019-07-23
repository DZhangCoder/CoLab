const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortraitSchema = new Schema ({
    userId: String,
    properties: {
        camera: Boolean
    },
    images: Array,
    videos: Arrayt,
})

const Portrait = mongoose.model('Portrait', PortraitSchema);

module.exports = Portrait;