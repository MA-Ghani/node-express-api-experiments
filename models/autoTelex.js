const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoTelexSchema = new Schema(
	{
		incoming: {
			type: Object,
			required: [true, "Data is required"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("autoTelex", autoTelexSchema);
