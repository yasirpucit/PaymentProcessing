


export const ProcessPayment = async (req,res,next) => {
    try {
    const { Credit_Card_Number, Card_Holder,
        Expiration_Date,Security_Code,Amount } = req.body

        const maxTries = 5;
        let message = '';
       

        if(Amount < 20){
            message = "Use CheapPaymentGateway"
        }
        else if(Amount >=21 && Amount < 500)
        {
             // Finding Availaible Premium Limits and Total Users From DataBase
             const premiumLimit = 3;
             const premiumUsers = 2;
            if(premiumUsers < premiumLimit){
                message = "Use PremiumPaymentGateWay";
            }
            else {
                message = "Use CheapPaymentGateway";
            }
        }
        else {
            message = "Use only ExecutivePaymentGateWay "
        }

       
        return res.status(200).send(message);

    }
catch (err) {
    err.code = 500;
    next();
}
}