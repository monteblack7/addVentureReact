let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

let activityRouter = require("./routes/activities-route.js");

mongoose.connect("mongodb://localhost:27017/add-venture");

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/activities", activityRouter);

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});