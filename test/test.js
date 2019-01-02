var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

it("Should check Traveler credentials and return status code", function(done){
    chai.request('http://localhost:3001')
    .post('/login')
    .send({ "email": "sitaram.sahu@gmail.com", "password" : "Sitaram1@", "isTraveler" : true})
    .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    });
})

it("Should check Owner credentials and return status code", function(done){
    chai.request('http://localhost:3001')
    .post('/login')
    .send({ "email": "testowner@gmail.com", "password" : "test", "isTraveler" : false})
    .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    });
})

it("Should check credentials and return status code 401 with wrong username and password", function(done){
    chai.request('http://localhost:3001')
    .post('/login')
    .send({ "email": "sitaram.sahu@gmail.com", "password" : "Sitaram1", "isTraveler" : true})
    .end(function (err, res) {
        expect(res).to.have.status(401);
        done();
    });
})

it("Should check the Traveler details in signUp handler and return the success status code", function(done){
    chai.request('http://localhost:3001')
    .post('/signup')
    .send({"firstName":"Robert" , "lastName":"Martin" , "email": "robert.martin@gmail.com", "password" : "syntel1", "isTraveler" : true})
    .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    });
})

it("Should check the Owner details in signUp handler and return the success status code", function(done){
    chai.request('http://localhost:3001')
    .post('/signup')
    .send({"firstName":"Robert" , "lastName":"Martin" , "email": "robert.martin@gmail.com", "password" : "syntel1", "isTraveler" : false})
    .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    });
})