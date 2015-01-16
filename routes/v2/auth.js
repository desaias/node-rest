var express = require('express');

module.exports = (function() {
    var router = express.Router();

    router.get('/', function (req, res) {
        res.json({
            message: 'auth v2 router'
        });
    });

    return router;
})();