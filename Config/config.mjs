import env from "dotenv";
env.config();

module.exports = {
    development: {
        secret : process.env.SECRET,
        port : process.env.PORT,
    }
  }
  
  