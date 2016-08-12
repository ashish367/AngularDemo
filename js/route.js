/**
*  Module
*

*/
var route = angular.module('ngRoute');
route.config(['$routeProvider',function($routeProvider) {

	$routeProvider.when('/',{
		templateUrl:'js/Dashboard/dashboard.html',
		controller:'DashboardController'
	});
	$routeProvider.when('/pass',{
		templateUrl:'js/password/pass.html',
		controller:'PasswordController'
	});
	$routeProvider.when('/addd',{
		templateUrl:'js/addDetail/add.html',
		controller:'AddController'
	});
	$routeProvider.when('/view',{
		templateUrl:'js/view/view.html',
		controller:'ViewController'
	});
}]);
