angular.module('blocItOff')
	.controller('MainCtrl', ["firebase", function($scope, $firebaseObject) {
		var ref = new Firebase("https://blocitoffapp.firebaseio.com");
		
		$scope.data = $firebaseObject(ref);
		
	}]);