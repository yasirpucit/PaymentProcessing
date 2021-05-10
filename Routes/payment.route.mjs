import { ValidatePayment } from "../Middleware/validator.mjs";
import { ProcessPayment } from "../Controllers/payment.controller.mjs";
import express from 'express';
const router = express.Router();


router.post("/Payment",ValidatePayment,ProcessPayment, async (req, res, next) => {
    next()
  });

  export default router