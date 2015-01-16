var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    app = express(),
    port = process.env.PORT || 3000;

var api = require('./routes/api');
var auth = require('./routes/auth');
var authv2 = require('./routes/v2/auth');

app.use(morgan('combined'))
app.use(compress());

app.use('/api', api);
app.use('/auth', auth);
app.use('/v2/auth', authv2);

app.use(function (req, res, next) {
    res.status(404);
    res.json({
        code: res.statusCode,
        message: 'oops!'
    });
});

app.listen(port);
console.log('Magic happens on port ' + port);