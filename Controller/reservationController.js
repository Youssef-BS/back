const ReservationService = require("../Service/reservationService");

class ReservationController {
  static async createReservation(req, res, next) {
    try {
      const newReservation = await ReservationService.reservation_stand(req);
      res.json(newReservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllReservations(req, res, next) {
    try {
      const reservations = await ReservationService.getAllReservations();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getReservationsByUser(req, res, next) {
    const { userId } = req.params;
    try {
      const reservations = await ReservationService.getReservationsByUser(userId);
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getReservationsWithEventsByUser(req, res, next) {
    const { userId } = req.params;
    try {
      const reservations = await ReservationService.getReservationsWithEventsByUser(userId);
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateReservation(req, res, next) {
    const userId = req.params.id;
    const eventId = req.params.event;
    try {
      const reservation = await ReservationService.updateReservationServiceForUser(userId, eventId, { acceptation: true });
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
}

module.exports = ReservationController;
