let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");
let path = require("path");

//import settings
let settings = require("./config/settings.js");

const PORT = process.env.PORT || 8080;

let activityRouter = require("./routes/activities-route.js");

mongoose.connect(settings.db);

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/activities", activityRouter);

//setup static files
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});