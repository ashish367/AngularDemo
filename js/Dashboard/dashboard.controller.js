angular.module('Cinema',[
	'angular-carousel',
'ngRoute',
'jtt_youtube',
'youtube-embed',
'ui.bootstrap',
'ngMaterial',
]).controller('Dashboard',DashboardInit);

/** @nginject*/
  function DashboardInit($scope,$rootScope,$location){
    initialize();
    function initialize() {
      $scope.carouselimg=["img/pass.png","img/addd.png","img/view.png","img/logo.png"];
      $scope.openTodo = function(image){
      	var carouselimgindex = $scope.carouselimg.indexOf(image);

      	var pageName = $scope.carouselimg[carouselimgindex].substring(4,8);
      	console.log('/'+pageName);
      	$location.path('/'+pageName);
      }
    }

  }
