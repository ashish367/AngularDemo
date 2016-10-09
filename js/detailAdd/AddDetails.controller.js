angular.module('Cinema').controller('AddCtrl', AddInit);
/**@nginject*/
function AddInit($scope, $rootScope, $location, $http) {
  initialize();
  loadAddVM();
  function initialize() {
      $scope.topDirections = ['left', 'up'];
      $scope.bottomDirections = ['down', 'right'];

      $scope.isOpen = false;

      $scope.availableModes = ['md-fling', 'md-scale'];
      $scope.selectedMode = 'md-fling';

      $scope.availableDirections = ['up', 'down', 'left', 'right'];
      $scope.selectedDirection = 'up';
    }
  function loadAddVM() {}
}
