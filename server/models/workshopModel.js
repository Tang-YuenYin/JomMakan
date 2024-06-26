// models/workshopModel.js
const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
  workshopName: { type: String, required: true, unique: true },
  workshopDescription: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  availableSlot: { type: Number, required: true },
  photoLink: { type: String },
  registered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  favourited: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;
