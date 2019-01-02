const express = require('express');
const router = express.Router();
const travelerModel = require('../../models/traveler');
const ownerModel = require('../../models/owner');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_KEY = "secret";

//Route to handle Post Request Call for Login
router.post('/', (req,res, next) => {
    console.log("Inside Login Post Request");
    var EMAIL = req.body.userDetails.email;
    var PASSWORD = req.body.userDetails.password;
    console.log("Email and Password:  : ",EMAIL, PASSWORD);

    if(req.body.userDetails.isTraveler) {

        console.log("Inside Traveler Login Request");
        //QUERY TRAVELER_INFO Collection to get the email and password
        travelerModel.findOne({email: req.body.userDetails.email})
        .exec()
        .then(traveler => {
            if(traveler.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.userDetails.password, traveler.password, (err,result)=>{
                if(err) {
                    return res.status(401).json({
                        message: 'Auth failed' 
                    });
                }
                if(result) {
                    const token = jwt.sign(
                        {
                            email: traveler.email,
                            userId: traveler._id,
                            firstname: traveler.firstname,
                            lastname:traveler.lastname,
                            phonenumber: traveler.phonenumber,
                            profileimage : traveler.profileimage,
                            aboutme: traveler.aboutme,
                            city: traveler.city,
                            country: traveler.country,
                            company: traveler.company,
                            school: traveler.school,
                            hometown: traveler.hometown,
                            languages: traveler.languages,
                            gender: traveler.gender,
                            memberSince: traveler.memberSince,
                            isTraveler: traveler.isTraveler
                        },
                        JWT_KEY,
                        {
                            expiresIn : "1h"
                        }
                    );
                    return res.status(200).json( {
                        message: "Auth Successful",
                        token : token
                        });
                }
                res.status(401).json({
                    message: 'Auth failed' 
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
    })
    } else {
        console.log("Inside Owner Login Request");
        //QUERY OWNER_INFO Collection to get the email and password
            ownerModel.findOne({email: req.body.userDetails.email})
            .exec()
            .then(owner => {
                if(owner.length < 1) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                bcrypt.compare(req.body.userDetails.password, owner.password, (err,result)=>{
                    if(err) {
                        return res.status(401).json({
                            message: 'Auth failed' 
                        });
                    }
                    if(result) {
                        const token = jwt.sign(
                            {
                                email: owner.email,
                                userId: owner._id,
                                firstname: owner.firstname,
                                lastname:owner.lastname,
                                phonenumber: owner.phonenumber,
                                profileimage : owner.profileimage,
                                aboutme: owner.aboutme,
                                city: owner.city,
                                country: owner.country,
                                company: owner.company,
                                school: owner.school,
                                hometown: owner.hometown,
                                languages: owner.languages,
                                gender: owner.gender,
                                memberSince: owner.memberSince,
                                isTraveler: owner.isTraveler
                            },
                            JWT_KEY,
                            {
                                expiresIn : "1h"
                            }
                        );
                        return res.status(200).json( {
                            message: "Auth Successful",
                            token : token
                        });
                    }
                    res.status(401).json({
                        message: 'Auth failed' 
                    });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
        })
    }
});

module.exports = router;

