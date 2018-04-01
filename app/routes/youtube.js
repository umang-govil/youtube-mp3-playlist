var express = require('express');
var path = require('path');
var fs = require('fs');

var YoutubeMp3Downloader = require("youtube-mp3-downloader");

var api = express.Router();

api.getSong = function(req, res) {

	var mp3 = './public/mp3';
	if (!fs.existsSync(mp3)) {
		fs.mkdirSync(mp3);
	}

	// var ffmpeg = path.join(__dirname, '../ffmpeg-3.4.2');

	var YD = new YoutubeMp3Downloader({
		"ffmpegPath": "ffmpeg", // Where is the FFmpeg binary located?
		"outputPath": mp3, // Where should the downloaded and encoded files be stored?
		"youtubeVideoQuality": "highest", // What video quality should be used?
		"queueParallelism": 2, // How many parallel downloads/encodes should be started?
		"progressTimeout": 2000 // How long should be the interval of the progress reports
	});

	YD.download("Vhd6Kc4TZls");

	YD.on("finished", function(err, data) {
		console.log(JSON.stringify(data));
		res.json({
			message: 'Completed'
		});
	});

	YD.on("error", function(error) {
		console.log(error);
	});

	YD.on("progress", function(progress) {
		console.log(JSON.stringify(progress));
	});

};

module.exports = api;
