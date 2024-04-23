const Reservation = require("../model/reservation");

module.exports = class ReservationService {
  
  static async reservation_stand(req) {

    const { evenementId, userId } = req.body;
    try {
      if (!evenementId || !userId) {
        throw new Error("evenementId and userId are required");
      }
      const reservation = new Reservation({ event: evenementId, user: userId });
      const savedReservation = await reservation.save();
      return savedReservation;
    } catch (error) {
      throw error;
    }
  }

  static async getAllReservations() {
    try {
      const reservations = await Reservation.find()
        .populate('user')
        .populate('event');
      return reservations;
    } catch (error) {
      throw error;
    }
  }

  static async getReservationsByUser(userId) {
    try {
      const reservations = await Reservation.find({ user: userId });
      return reservations;
    } catch (error) {
      throw error;
    }
  }

  static async getReservationsWithEventsByUser(userId) {
    try {
      const reservations = await Reservation.find({ user: userId }).populate('event');
      return reservations;
    } catch (error) {
      throw error;
    }
  }

  static async updateReservationServiceForUser(userId, eventId, updateData) {
    try {
      const reservation = await Reservation.findOneAndUpdate(
        { user: userId, event: eventId }, 
        updateData,
        { new: true }
      ); 
      if (!reservation) {
        throw new Error('Reservation not found');
      } 
      return reservation;
    } catch (error) {
      throw error;
    }
  }
  


};
