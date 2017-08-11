let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let activitySchema = new Schema({
    sport: {
        type: String,
        required: true
    },
    position: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    },
    label: {
        type: String,
        required: true
    },
    defaultAnimation: {
        type: Number,
        default: 2
    },
    locationstate: {
        type: String,
        required: true
    },
    // city: {
    //     type: String,
    //     required: true
    // },
    // address: {
    //     type: String,
    //     required: true
    // },
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("activityList", activitySchema);