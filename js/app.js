//[] is for services
var myapp = angular.module('student', [])
var host = 'http://student.webdxd.com/api'

// name of the controller, the services
// $http as the AJAX
// $scope



myapp.controller('studentController', function($http, $scope){
	// $scope.student = {
	// 	firstname: "Yan",
	// 	lastname: "Hong"
	// }

	$scope.students = ["0"]

	console.log("???")
	console.log($scope.students)

	$http.get(host + '/student').success(function(response){
		$scope.students = response
	})3

	console.log("???")

	$scope.getStudentDetail = function(sid){
		console.log("???")
		$http.get(host + '/student' + '/' + sid).success(
			function(response){
			$scope.clickedStudent = response
		})
	}

	console.log("???")




})
