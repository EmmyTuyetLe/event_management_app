const Event = require('../models/event');
exports.createNewEvent = function(req, res){
    //retrieve new Event details from req body
    {}
    Event.create({
     ...req.body
    }, (err, newEvent)=>{
        if (err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({message: "new event created", newEvent})
        }
    })
}

exports.fetchEvents = (req, res) => {
    let conditions = {};
if(req.query.title){
    conditions.title = req.query.title
}
if(req.query.cost){
    conditions.author=req.query.cost
}
if(req.query.category){
    conditions.author=req.query.category
}
if(req.query.description){
    conditions.author=req.query.description
}
if(req.query.purchaseCount){
    conditions.author=req.query.purchaseCount
}
if(req.query.linkUrl){
    conditions.author=req.query.linkUrl
}
if(req.query.tags){
    conditions.author=req.query.tags
}
    //check req.query for filters
    console.log(req.query)
    //if there is filters, use them in Model.find query
    //fetch all Events
  Event.find({}, (err, events) => {
      if  (err){
          return res.status(500).jsonjson({message: err})
      } else {
          return res.status(200).json({events})
      }
  })
}
exports.fetchSingleEvent = (req,res) => {
    Event.findById(req.params.id, (err,event) => {
        if (err) {
            return res.status(500).json({ message:err })
        } else if (!event) {
                return res.status(404).json({ message: "event not found" })
            } else {
            return res.status(200).json({ event })
        }
    })
    }
exports.updateSingleEvent = (req,res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            return res.status(500).json({ message:err })
        } else if (!event) {
                return res.status(404).json({ message: "Event not found" })
            } else {
            return res.status(200).json({ message: 'Event updated successfully' })
        }
    });
}
exports.deleteSingleEvent = (req, res) => {
    Event.findByIdAndDelete(req.params.id, (err, event) => {
        if(err){
            return res.status(500).json({message: err})
        }
        else if (!event) {
            return res.status(404).json({message:"event was not found"})
        }
        else {
            return res.status(200).json({message: "Event deleted successfully"})
        }
    }) 
 }
