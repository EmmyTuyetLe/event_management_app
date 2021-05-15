// Express method called router
const express = require('express');
const router = express.Router();
const EventCtrl = require('../controllers/eventControllers');
// POST request to /events to create a new event
router.post('/events', EventCtrl.createNewEvent);
//GET request to /events to fetch all events
router.get('/events', EventCtrl.fetchEvents);
//GET request to /events/:id to fetch a single event by id
router.get('/events/:id', EventCtrl.fetchSingleEvent);
//PUT request to /events/:id to update a specific event
router.put('/events/:id', EventCtrl.updateSingleEvent);
//DELETE request to /events/:id to delete a specific event
router.delete('/events/:id', EventCtrl.deleteSingleEvent);
module.exports = router;