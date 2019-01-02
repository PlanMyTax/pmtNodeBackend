const express = require("express");
const router = express.Router();
const checkAuth = require("../../middleware/check-auth");
const travelerModel = require("../../models/traveler");
const ownerModel = require("../../models/owner");

//Route to handle update profile for the Traveler
/*
    @param : FIRST_NAME, LAST_NAME, EMAIL, PROFILE_IMAGE, PHONE_NUMBER
    @param : ABOUT_ME, CITY, COUNTRY, COMPANY, SCHOOL, HOMETOWN, LANGUAGES, GENDER
*/
router.put("/", checkAuth, function(req, res) {
  console.log("Inside Edit profile Request.");
  //Query to update the parameters received
  if (req.body.userDetails.isTraveler) {
    travelerModel
      .update(
        { email: req.body.userDetails.email },
        {
          $set: {
            firstname: req.body.userDetails.firstName,
            lastname: req.body.userDetails.lastName,
            phonenumber: req.body.userDetails.phoneNumber,
            profileimage: req.body.userDetails.profileImage,
            aboutme: req.body.userDetails.aboutMe,
            city: req.body.userDetails.city,
            company: req.body.userDetails.company,
            school: req.body.userDetails.school,
            country: req.body.userDetails.country,
            hometown: req.body.userDetails.hometown,
            languages: req.body.userDetails.languages,
            gender: req.body.userDetails.gender
          }
        }
      )
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  } else {
    ownerModel
      .update(
        { email: req.body.data.userDetails.email },
        {
          $set: {
            firstname: req.body.userDetails.firstName,
            lastname: req.body.userDetails.lastName,
            phonenumber: req.body.userDetails.phoneNumber,
            profileimage: req.body.userDetails.profileImage,
            aboutme: req.body.userDetails.aboutMe,
            city: req.body.userDetails.city,
            company: req.body.userDetails.company,
            school: req.body.userDetails.school,
            country: req.body.userDetails.country,
            hometown: req.body.userDetails.hometown,
            languages: req.body.userDetails.languages,
            gender: req.body.userDetails.gender
          }
        }
      )
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }
});
module.exports = router;