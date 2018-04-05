angular.module('chatApp', ['ngRoute'])

.run(['$log',function($log){
	$log.info("Chat application is running..");
}])