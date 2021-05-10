import Process from "./payment.route.mjs";
import authenticate from '../Common/authenticate.mjs';

export default (app) => {
    app.use('/Process',authenticate, Process);
  }