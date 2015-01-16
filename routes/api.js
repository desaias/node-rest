var express = require('express');

module.exports = (function() {
    var router = express.Router();
    var redis = require('redis');
    var client = require('../storage/redis/config');

    router.get('/', function (req, res) {
        client.set("string key2", "string val2");
        res.json({
            message: 'api router'
        });
    });

    return router;
})();