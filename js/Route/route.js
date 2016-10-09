angular.module('Cinema')
.config(['$routeProvider',function($routeProvider) {

	$routeProvider.when('/',{
		templateUrl:'js/dashboard/dashboard.html',
		controller:'Dashboard'
	});
	$routeProvider.when('/pass',{
		templateUrl:'js/password/pass.html',
		controller:'Password'
	});
	$routeProvider.when('/addd',{
		templateUrl:'js/detailAdd/add.html',
		controller:'AddCtrl'
	});
	$routeProvider.when('/view',{
		templateUrl:'js/view/view.html',
		controller:'View'
	});
}]);
