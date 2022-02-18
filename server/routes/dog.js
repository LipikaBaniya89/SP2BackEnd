var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Dog = require ("../db/models/dog");

/* GET sdog listing. */
router.get('/', (req, res, next) => {
  Dog.find({}, (err,result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Create new dog survey
router.post ("/",  (req,res,next) => {
  console.debug(req.body);
  const data = req.body;
  const dog1 = new Dog({
        image_id1   : data.image_id1,
        image_tag1  : data.image_tag1,
        image_link1 : data.image_link1
  });
  dog1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });

});



//Delete new dog survey
router.delete("/", (req, res, next) => {
  const id = req.body._id;
  console.debug(id);
  Dog.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

//Update new dog survey
router.put("/", async (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  var dog1 = await Dog.findOne({ code: data.code });
  dog1.image_id1   = data.image_id1;
  dog1.image_tag1  = data.image_tag1;
  dog1.image_link1 = data.image_link1
  
  await dog1.save();
  res.status(200).json(dog1);
});

module.exports = router;
