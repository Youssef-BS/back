const Evenement = require("../model/evenement");
const Foire = require("../model/foire");

class EvenementService {
  
  static async getAllEvent(){
    try {
        const AllEvent = await  Evenement.find();
        return AllEvent;
    } catch (error) {
        console.log(`Could not fetch events ${error}`)
    }
}

static async createEvent(data){
  try {

      const newEvent = {
          EventName: data.EventName,
          DateDebut: data.DateDebut,
          DateFin: data.DateFin,
          description: data.description,
      }
     const response = await new Evenement(newEvent).save();
     const foire = await Foire.findById("65c220ca9aeb263b734a054b");
     foire.evenements.push(response._id);
     await foire.save();
     return response;
  } catch (error) {
      console.log(error);
  } 

}

  static async getEventById(eventId) {
    try {
      return await Evenement.findById(eventId);
    } catch (error) {
      console.error(`Event not found: ${error}`);
      throw error;
    }
  }

  static async updateEvent(eventId, updatedEventData) {
    try {
      const updateResponse = await Evenement.updateOne(
        { _id: eventId },
        { $set: updatedEventData }
      );
      return updateResponse;
    } catch (error) {
      console.error(`Could not update event: ${error}`);
      throw error;
    }
  }

  static async deleteEvent(eventId) {
    try {
      return await Evenement.findOneAndDelete({ _id: eventId });
    } catch (error) {
      console.error(`Could not delete event: ${error}`);
      throw error;
    }
  }
};


module.exports = EvenementService;