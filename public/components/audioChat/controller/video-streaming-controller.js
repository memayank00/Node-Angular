angular.module('chatApp')
.controller('videoStreamController', ['$scope', function($scope){
	console.log("video stream controller");

	var constraints = {
	  video: true,
	  audio:true
	};
	var video = document.querySelector('video');
	console.log('<<<<<<<<<<')
	console.log(video)
	console.log('<<<<<<<<<<')

	function handleSuccess(stream) {
	  video.srcObject = stream;
	}

	function handleError(error) {
	  console.error('getUserMedia error: ', error);
	}

	navigator.mediaDevices.getUserMedia(constraints).
	  then(handleSuccess).catch(handleError);

}]);