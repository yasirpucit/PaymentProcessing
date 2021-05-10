import app from "../app.mjs";
import chai from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";



//Assertion Style 
chai.should();
chai.use(chaiHttp);

describe('Test API', () => {

    // Test ProcessPayment
    describe("POST /Process/Payment", () => {
        it("It should process the payments",(exec) => {
            const payment = {
                Amount: 780,
                Credit_Card_Number:"5217850328515461",
                Card_Holder:"xyz123",
                Expiration_Date:"04-07-2022",
                Security_Code:"x12"
            }
            chai.request(app)
            .post("/Process/Payment")
            .send(payment)
            .end((err,res) => {
                res.status.should.equal(200)
                
                exec();
            })
        })

        it("It should also give credit card validation error",(exec) => {
            const payment = {
                
            }
            chai.request(app)
            .post("/Process/Payment")
            .send(payment)
            .end((err,res) => {
                res.should.have.status(400)
                
                exec();
            })
        })


        it("It should give credit card validation error",(exec) => {
            const payment = {
                Amount :780,
                Credit_Card_Number : "521785032851546",
                Card_Holder : "xyz123",
                Expiration_Date : "04-07-2022",
                Security_Code : "x12"
            }
            chai.request(app)
            .post("/Process/Payment")
            .send(payment)
            .end((err,res) => {
                res.should.have.status(400)
                
                exec();
            })
        })
   

    it("It should give amount validation error",(exec) => {
        const payment = {
            Amount :-5,
            Credit_Card_Number : "5217850328515461",
            Card_Holder : "xyz123",
            Expiration_Date : "04-07-2022",
            Security_Code : "x12"
        }
        chai.request(app)
        .post("/Process/Payment")
        .send(payment)
        .end((err,res) => {
            res.should.have.status(400)
            
            exec();
        })
    })

    it("It should give ExpirationDate validation error",(exec) => {
        const payment = {
            Amount :780,
            Credit_Card_Number : "5217850328515461",
            Card_Holder : "xyz123",
            Expiration_Date : "04-07-2016",
            Security_Code : "x12"
        }
        chai.request(app)
        .post("/Process/Payment")
        .send(payment)
        .end((err,res) => {
            res.should.have.status(400)
          
            exec();
        })
    })

})
})