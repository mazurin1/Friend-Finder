module.exports = function (app) {


    var friends = require('../app/data/friends.js');
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //   * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
        //This route will also be used to handle the compatibility logic.
        friends.push(req.body);
    });
};