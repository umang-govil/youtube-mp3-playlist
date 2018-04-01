var app = angular.module('playlistApp', ['angularSoundManager']);

app.controller('app', function($scope) {

	// var socket = io.connect('http://localhost:3000');
	$scope.songs = [];
	$scope.send = function() {

		/*socket.emit('addPlay',
			$('#message').val()
		);
		var data1 = $('#message').val();
		$('#mess1').append('<br><b>' + data1 + '</b><br>');
		$('#message').val('');
		return false;*/
	};

	/*socket.on('msg', function(data) {
		console.log(data);
		$('#mess2').append('<br><b>' + data + '</b><br>');
	});*/

	$scope.addSong = function() {
		console.log("addSong");
		$scope.songs.push($scope.mp3);
		console.log($scope.songs);
	};

	$scope.mp3 = {
		id: 'one',
		title: 'Rain',
		artist: 'Drake',
		url: './mp3/Cold Funk - Funkorama - Kevin MacLeod (No Copyright Music).mp3'
	};


});
