var express = require('express');

var youtube = require('./youtube');

var api = express.Router();

api.get('/getSong', youtube.getSong);

module.exports = api;
