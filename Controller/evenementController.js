const EventService = require("../Service/evenementService");

module.exports = class Evenement {
  
  static async apiGetAllEvent(req, res, next){
    try {
      const evenements = await EventService.getAllEvent();
      if(!evenements){
         res.status(404).json("There are no event published yet!")
      }
      res.json(evenements);
    } catch (error) {
       res.status(500).json({error: error})
    }

}

  static async apiGetEventById(req, res, next) {
    try {
      const id = req.params.id;
      const evenement = await EventService.getEventById(id);
      if (!evenement) {
        return res.status(404).json("Event not found!");
      }
      res.json(evenement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async apiCreateEvent(req, res, next){
    try {
       const comment = {}
       comment.EventName  = req.body.EventName;
       comment.DateDebut  = req.body.DateDebut;
       comment.DateFin    = req.body.DateFin;
       comment.description = req.body.description;
  

       const updatedEvent = await EventService.createEvent(comment);

       res.json(updatedEvent);

    } catch (error) {
       res.status(500).json({error: error});
    }
 }
 
  static async apiUpdateEvent(req, res, next) {
    try {
      const eventId = req.params.id;
      const eventData = {
        EventName: req.body.EventName,
        DateDébut: req.body.DateDébut,
        DateFin: req.body.DateFin,
        description: req.body.description,
        Affiche: req.body.Affiche,
      };

      const updatedEvent = await EventService.updateEvent(eventId, eventData);
      res.json(updatedEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async apiDeleteEvent(req, res, next) {
    try {
      const eventId = req.params.id;
      await EventService.deleteEvent(eventId);
      res.json("Event deleted");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
