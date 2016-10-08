/**
*  Module
*
*/
angular.module('Cinema')
.config(['$routeProvider',function($routeProvider) {

	$routeProvider.when('/',{
		templateUrl:'js/Dashboard/dashboard.html',
		controller:'Dashboard'
	});
	$routeProvider.when('/pass',{
		templateUrl:'js/Password/pass.html',
		controller:'Password'
	});
	$routeProvider.when('/addd',{
		templateUrl:'js/addDetail/add.html',
		controller:'AddCtrl'
	});
	$routeProvider.when('/view',{
		templateUrl:'js/View/view.html',
		controller:'View'
	});
}]);
