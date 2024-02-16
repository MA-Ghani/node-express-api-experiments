const autoTelexModel = require("../../../../models/autoTelex");

exports.createData = async (req, res, next) => {
  try {
    const { incoming } = req.body;
	
    //Validate and check if incoming field is an object and not empty
	if (typeof incoming !== "object" || !Object.keys(incoming).length) {
	  return res.status(400).json({ error: "Incoming Data in required" });
	}
	console.log("incoming <<<<<<<<<<<<<<<<<<<<<<<<")
	console.log(incoming)
    //Add Media
    const data = new autoTelexModel({
      incoming,
    });

    await data.save();

    res.status(200).json(data);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
