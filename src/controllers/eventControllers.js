const Event = require('../models/event');
const { genImage } = require('../services/image');

exports.createNewEvent = function(req, res){
    //retrieve new Event details from req body
    try {
        const { title, cost, category } = req.body
        const imageUrl = genImage(category)
    
        let newEvent = Event.create({ title, cost, category })
        res.json({ message: `New event successfully created!`, newEvent })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
    }

exports.fetchEvents = (req, res) => {
    let conditions = {};
    if(req.query.category) {
        conditions.category = req.query.category
    }
    //check req.query for filters
    console.log(conditions)
    console.log(req.query)
    //if there is filters, use them in Model.find query
    //fetch all Events
  Event.find(conditions, (err, events) => {
      if  (err) {
          return res.status(500).json({ message: err })
      } else {
          return res.status(200).json({ events })
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
                return res.status(404).json({ message: "event not found" })
            } else {
                event.save((err,savedEvent) => {
                    if(err){
                        return res.status(400).json({ message: err })
                    } else {
                        return res.status(200).json({ message: "event updated successfully" })
        }
    });
}
    })
}
exports.deleteSingleEvent = (req, res) => {
    Event.findByIdAndDelete(req.params.id, (err, event) => {
        if(err){
            return res.status(500).json({ message: err })
        }
        else if (!event) {
            return res.status(404).json({ message:"event was not found" })
        }
        else {
            return res.status(200).json({ message: "event deleted successfully" })
        }
    }) 
 }
