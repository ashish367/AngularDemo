app.controller('AddController',[
  '$scope',
  '$rootScope',
  '$location',
  '$http',
  function($scope,$rootScope,$location,$http){
  var date;
  var hours;
  var min;
  $scope.selected = "Alabama";
  var states = ["electronic","young girls","2012","bruno mars","rock","yahin","pop"];
	$scope.states = states;
  $scope.addStates = function(text){
    $scope.states.push(text);
    alert(text);
  }
  $scope.Clockin = function(){
   date = new Date();
   window.document.cookie = date.getDate();
   if (window.document.cookie == date.getDate()) {
     hours = date.getHours() - 12;
     min = date.getMinutes();
     var time = hours +':'+ min;
     console.log("Clocked IN "+time);
     alert("Clocked IN "+time);

   }else {
     $scope.hide = true;
   }
  }

  $scope.Clockout = function(){
    date = new Date();
    if (window.document.cookie == date.getDate()) {
      $scope.hide = false;
      hours = date.getHours() - 12;
      min = date.getMinutes();
      var time = hours +':'+ min;
      console.log("Clocked out "+time);
      alert("Clocked OUT "+time);
    }else {
      alert("YOU HAVE NOT CLOCKED OUT PREVIOUS");
    }


  }



  console.log($scope.states);
    }]);
