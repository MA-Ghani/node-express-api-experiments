var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AutoTelexSchema = new Schema(
  {
    incoming: { type: Object, required: true },
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model("AutoTelex", AutoTelexSchema);
