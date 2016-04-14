angular.module('myApp', ['ngMaterial']);
var mainController = function($scope, $http) {
	console.log('hello world from controller');

var refresh = function() {
	$http.get('/tasklist').success(function(response) {
		console.log("I got the data I requested");
		$scope.tasklist = response;
		$scope.task = "";
	});
};
refresh();
	$scope.addTask = function(keyEvent) {
		console.log($scope.task);
		$http.post('/tasklist', $scope.task).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.taskDone = function(id) {
		console.log(id);
		$http.delete('/tasklist/' + id).success(function(response) {
			refresh();
		});
	}
	


};








angular.module('myApp').controller('mainController', mainController);