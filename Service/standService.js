const Stand = require("../model/stand");

module.exports = class StandService{
    static async getAllStand(){
        try {
            return await Stand.find();
        } catch (error) {
            throw new Error(`Could not fetch Stands: ${error.message}`);
        }
    }

    static async createStand(data){
        try {
           const response = await Stand.create(data);
           return response;
        } catch (error) {
            throw new Error(`Could not create Stand: ${error.message}`);
        } 
    }

    static async getStandById(standId){
        try {
            return await Stand.findById(standId);
        } catch (error) {
            throw new Error(`Stand not found: ${error.message}`);
        }
    }

    static async updateStand(standId, newData){
        try {
            const updatedStand = await Stand.findByIdAndUpdate(standId, newData, { new: true });
            if (!updatedStand) {
               throw new Error("Stand not found");
            }
            return updatedStand;
        } catch (error) {
            throw new Error(`Could not update Stand: ${error.message}`);
        }
    }

    static async deleteStand(standId){
        try {
            return await Stand.findByIdAndDelete(standId);
        } catch (error) {
            throw new Error(`Could not delete Stand: ${error.message}`);
        }
    }
}
