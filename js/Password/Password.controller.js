angular.module('Cinema').controller('Password', Password);
/**@nginject*/
function Password($scope, $rootScope, $location) {
  initialize();
  $scope.onSwipeLeft = function(ev) {
    alert('You swiped left!!');
    alert($scope.employee[0]);
  };

  function initialize() {
    $scope.employee = ['Ashish','Manish','Sachin','Sagar','Satish','Abhiskek','Ashok','Jayent','suraj','Anuj','Dharam','yogendra','Sahil','Soni','more'];
    $scope.openEmployee = function(name) {
      alert(name);
    }
  }
}
angular.module('Cinema')
.directive('ashish', Ashish);
/**@nginject*/
function Ashish() {
  return {
		restrict:'AE',
    templateUrl:'js/Password/ashish.html',
    scope :{
      names : '=',
      open :'&'
    },
    link:function (scope,element,attr) {

    },
    controller:'Password'

  }
}
