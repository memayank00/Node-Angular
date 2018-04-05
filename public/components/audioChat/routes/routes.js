angular.module('chatApp')

.config(['$routeProvider', '$locationProvider', 
  function($routeProvider, $locationProvider) {
  
  $routeProvider
   .when('/', {
    templateUrl: 'components/audioChat/template/video-stream.html',
    controller: 'videoStreamController'
    })
   .when('/1', {
    templateUrl: 'components/audioChat/template/video-chat.html',
    controller: 'videoCallController'
    });
    
}]);