const AutoTelex = require("../models/autotelex");

exports.AutoTelexHook = async (req, res) => {
  try {
    console.log(req.body);
    const data = new AutoTelex({
      incoming: req.body,
    });
    await data.save();
    res.status(200).json({ message: "Data saved", data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
