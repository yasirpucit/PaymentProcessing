import app from "./app.mjs";
import env from "dotenv";
env.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is listening on Port :"+ port);
});

