const Stand = require("../model/stand");
const Foire = require("../model/foire");

module.exports = class StandService {
  static async getAllStand() {
    try {
      return await Stand.find();
    } catch (error) {
      console.error(`Could not fetch Stands: ${error}`);
      throw error;
    }
  }

  static async createStand(data) {
    try {
      const newStand = await Stand.create(data);
      const foire = await Foire.findById("65c220ca9aeb263b734a054b");
      foire.stands.push(newStand._id);
      await foire.save();
      return newStand;
    } catch (error) {
      console.error(`Could not create Stand: ${error}`);
      throw error;
    }
  }

  static async getStandById(standId) {
    try {
      return await Stand.findById(standId);
    } catch (error) {
      console.error(`Stand not found: ${error}`);
      throw error;
    }
  }

  static async updateStand(standId, updateData) {
    try {
      const updatedStand = await Stand.findByIdAndUpdate(standId, updateData, { new: true });
      return updatedStand;
    } catch (error) {
      console.error(`Could not update Stand: ${error}`);
      throw error;
    }
  }

  static async deleteStand(standId) {
    try {
      const deletedStand = await Stand.findByIdAndDelete(standId);
      return deletedStand;
    } catch (error) {
      console.error(`Could not delete Stand: ${error}`);
      throw error;
    }
  }
};
