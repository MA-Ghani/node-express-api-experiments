const Router = require("express").Router;
const { createData } = require("./autoTelex.controller");


module.exports = Router({ mergeParams: true }).post(
    "/autotelex/create",
    createData
);