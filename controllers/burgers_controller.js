var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burgers.createOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  // var condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burgers.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
id=module.exports = router;
