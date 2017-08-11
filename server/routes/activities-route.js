let express = require("express");
let activityRouter = express.Router();

let Activity = require("../models/activities.js");

// activityRouter.use((req, res, next) => {
//     for(let key in req.query) {
//         if(typeof req.query[key] === "string") {
//             req.query[key] = req.query[key].toLowerCase();
//         }
//     }
//     next();
// });

//get your data
activityRouter.get("/", (req, res) => {
    Activity.find(req.query, (err, data) => {
        if (err) {
            res.status(500).send({"Message": "SERVER ERROR", err});
        } else {
            res.status(200).send({"Message": "SUCCESS, HERE IS YOUR DATA", data});
        }
    })
});

//post new data
activityRouter.post("/", (req, res) => {
    let newActivity = new Activity(req.body);
    newActivity.save((err, data) => {
        if (err) {
            res.status(500).send({"Message": "SERVER ERROR", err});
        } else {
            res.status(200).send({"Message": "ITEM WAS CREATED", data});
        }
    })
});

//get item by ID
activityRouter.get("/:id", (req, res) => {
    Activity.findOne({"_id": req.params.id}, (err, data) => {
        if (err) {
            res.status(500).send({"Message": "SERVER ERROR", err});
        } else if (data === null) {
            res.status(404).send({"Message": "NOT FOUND", err});
        } else {
            res.status(200).send({"Message": "HERE IS YOUR DATA BY ID", data});
        }
    })
});

activityRouter.put("/:id", (req, res) => {
    Activity.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
        if (err) {
            res.status(500).send({"Message": "SERVER ERROR", err});
        } else if (data === null) {
            res.status(404).send({"Message": "NOT FOUND", err});
        } else {
            res.status(200).send({"Message": "UPDATE SUCCESSFUL"});
        }
    })
});

activityRouter.delete("/:id", (req, res) => {
    Activity.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({"Message": "SERVER ERROR", err});
        } else {
            res.status(200).send({"Message": "SUCCESSFULLY DELETED", data});
        }
    })
});

activityRouter.put("/upvotes/:id", (req, res) => {
    Activity.findOne({"_id": req.params.id}, (err, data) => {
        if (err) {
            res.status(500).send({"Message": "SERVER ERROR", err});
        } else if (data === null) {
            res.status(404).send({"Message": `ITEM WITH ID OF ${req.params.id} WAS NOT FOUND`});
        } else {
            data.upvotes += 1;
            data.save((err, data) => {
                if (err) {
                    res.status(500).send({"Message": "SERVER ERROR", err});
                } else {
                    res.status(200).send({"Message": "ITEM WAS UPDATED", data});
                }
            })
        }
    })
});

activityRouter.put("/downvotes/:id", (req, res) => {
    Activity.findOne({"_id": req.params.id}, (err, data) => {
        if (err) {
            res.status(500).send({"Message": "SERVER ERROR", err});
        } else if (data === null) {
            res.status(404).send({"Message": `ITEM WITH ID OF ${req.params.id} WAS NOT FOUND`});
        } else {
            data.downvotes += 1;
            data.save((err, data) => {
                if (err) {
                    res.status(500).send({"Message": "SERVER ERROR", err});
                } else {
                    res.status(200).send({"Message": "ITEM WAS UPDATED", data});
                }
            })
        }
    })
});

module.exports = activityRouter;