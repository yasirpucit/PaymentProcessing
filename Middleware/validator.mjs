import Joi from "joi";
import HttpError from '../common/httpError.mjs';


export const ValidatePayment = (req, res, next) => {
    const today = new Date();
    const schema = Joi.object({
        Credit_Card_Number: Joi.string().strict().required().creditCard(),
        Card_Holder: Joi.string().strict().required(),
        Expiration_Date: Joi.date().required().min(today),
        Security_Code: Joi.string().strict().optional().min(3),
        Amount: Joi.number().strict().required().min(0),
    }).options({ allowUnknown: false })
    const { error, value } = schema.validate(req.body)
    if (error) throw new HttpError(400, error.message)
    next()
  }