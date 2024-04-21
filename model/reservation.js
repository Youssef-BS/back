const mongoose=require("mongoose")

const ReservationSchema = mongoose.Schema(
   {
   acceptation:{type:Boolean,
      required:true,
      default:false
   },
   // stand: [{ type: mongoose.Types.ObjectId, ref: 'Stand' }],
   user: { type: mongoose.Types.ObjectId, ref: 'User' },
   event: { type: mongoose.Schema.Types.ObjectId, ref: 'Evenement' }

})
const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;