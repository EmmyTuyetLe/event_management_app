const mongoose = require('mongoose');

// create schema, mongoose acts as middleman between app and database
const eventSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    cost: {
        type: Number,
        required: true,
        minValue: 0
    },
    category:  {
        type: String, 
        enum: ["business", "casual", "party", "sports", "general"],
        default: "general"
    },
    description: String,
    purchaseCount: Number,
    linkUrl: String,
    tags: Array
})
const Event = mongoose.model('Event', eventSchema); //'Event' represents collection in the eventapp database, created from eventSchema
module.exports = Event;