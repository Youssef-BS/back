const StandService = require("../Service/standService");

module.exports = class Stand {
  static async apiGetAllStand(req, res, next) {
    try {
      const stands = await StandService.getAllStand();
      if (!stands.length) {
        return res.status(404).json("There are no Stands published yet!");
      }
      res.json(stands);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async apiGetStandById(req, res, next) {
    try {
      const standId = req.params.id;
      const stand = await StandService.getStandById(standId);
      if (!stand) {
        return res.status(404).json("Stand not found!");
      }
      res.json(stand);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async apiCreateStand(req, res, next) {
    try {
      const stand = {
        prix: req.body.prix,
        superficie: req.body.superficie,
        disponibilite: true, // Assuming disponibilite is a boolean
        Numero: req.body.Numero,
      };
      const createdStand = await StandService.createStand(stand);
      res.json(createdStand);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async apiUpdateStand(req, res, next) {
    try {
      const standId = req.params.id;
      const updatedStandData = {
        prix: req.body.prix,
        superficie: req.body.superficie,
        disponibilite: req.body.disponibilite,
        Numero: req.body.Numero,
      };
      const updatedStand = await StandService.updateStand(standId, updatedStandData);
      if (!updatedStand) {
        throw new Error("Unable to update Stand, error occurred");
      }
      res.json(updatedStand);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async apiDeleteStand(req, res, next) {
    try {
      const standId = req.params.id;
      const deleteResponse = await StandService.deleteStand(standId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
