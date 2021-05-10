import 'express-async-errors'
import jwt from 'jsonwebtoken'
import HttpError from './httpError.mjs'
import models from '../models/index.js'
// import { development } from '../Config/config.mjs';
//const config = require("../Config/config.mjs");
const { userTokens, users } = models

export default async function authenticate(req, res, next) {
       const header = req.header('Authorization');
    
       // const token = header.split(" ")[1];

  // if (!token) throw new HttpError(400, 'No access token provided.')

 // const { token: sessionToken } = jwt.verify(token, secret)

  // const usertoken = await userTokens.findOne({
  //   where: { token: sessionToken, type: 'session' }
  // })

  // if (!usertoken) throw new HttpError(400, 'Access Token has expired.')

  // let user = await usertoken.getUser()

  // if (user.deleted) throw new HttpError(400, 'User is inactive.')

  // req.session = user

  next()
}




