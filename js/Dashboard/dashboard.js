var app = angular.module('app',[
	'ngRoute',
	'angular-carousel',
	'jtt_youtube',
	'youtube-embed',
	'ui.bootstrap'
]);
app.controller('DashboardController',[
  '$scope',
  '$rootScope',
  '$location',
  function($scope,$rootScope,$location){
		var vm = this;
    vm.name="Cmss";
    vm.carouselimg=["img/pass.png","img/addd.png","img/view.png","img/logo.png"];
    vm.openTodo = function(image){
    	var carouselimgindex = vm.carouselimg.indexOf(image);

    	var pageName = vm.carouselimg[carouselimgindex].substring(4,8);
    	console.log('/'+pageName);
    	$location.path('/'+pageName);
    }
  }]);
