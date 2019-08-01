module.exports = function (app) {


    var friends = require('../app/data/friends.js');
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //   * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
        //This route will also be used to handle the compatibility logic.
        //for each friend in friends array
        var bestMatch = {};
        var bestScore = null;
        for (var i = 0; i < friends.length; i++) {
            if (bestScore == null) {
                bestMatch = friends[i];
                bestScore = 50;
            }

            var currentScore = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                currentScore = currentScore + Math.abs(friends[i].scores[j] - req.body.scores[j]);
            }
             
            if (currentScore < bestScore) {
                bestScore = currentScore;
                bestMatch = friends[i];
            }
        }
        friends.push(req.body);
        return res.json(bestMatch);


    });
};