angular.module('Cinema').controller('View', ViewInit);
/**@nginject*/
function ViewInit($scope, $rootScope, $location, $http, youtubeFactory, $sce) {
  initialize();

  function initialize() {

    var windowHeight = screen.height; //full screen height
    $scope.windowidth = screen.width - 16; //full screen height
    $scope.iframeheight = 232;
    var headerHeight = 56;
    $scope.YoutubeListCard = (windowHeight - ($scope.iframeheight + headerHeight));
    $scope.youtubelistheight = ($scope.YoutubeListCard / 4);

    var _apiKey = "AIzaSyBtb7OkQLfSP3GcM9j37otCAKFOfPuXJ3s";
    var artistname = "Arjit singh";
    var trackname = "Channa Merya";
    var searchkeyword = artistname + trackname;
    youtubeFactory.getVideosFromSearchByParams({
      key: _apiKey,
      q: searchkeyword,
      maxResults: "4",
      part: 'snippet',
      order: 'relevance',
      type: 'video',
      videoCategoryId: 10,
    }).then(function(_response) {
      if (angular.isDefined(_response.error) && _response.error.code == 400) {
        alert("Unable to search for your music video right now. Please try again later");
      } else if (angular.isDefined(_response.data.items) && _response.data.items.length <= 0) {
        alert("Sorry, we could not find any music videos for " + artistname + "-" + trackname);
      } else if (angular.isDefined(_response.data.items) && _response.data.items.length > 0) {
        console.info("videos from search ", _response);
        $scope.ytracklist = _response.data.items;
        console.info("videos from search by ytracklist", $scope.ytracklist);
        $scope.playvideo(_response.data.items[0].id.videoId);
        if (angular.isDefined(_response.data.prevPageToken)) {
          $scope.prevPageTokenBoolean = true;
          $scope.prevPageTokenValue = _response.data.prevPageToken;
        }
        if (angular.isDefined(_response.data.nextPageToken)) {
          $scope.nextPageTokenBoolean = true;
          $scope.nextPageTokenValue = _response.data.nextPageToken;
        }
        $scope.$on('youtube.player.ended', function($event, player) {
          // stop plating it again
          player.stopVideo();
        });
      }
    }, function(error) {
      $log.error("Error fetching Youtube Data: " + error);
      alert("Unable to search for your music video right now. Please try again later");
      $location.path('/');
    });
    $scope.playvideo = function(videoId) {
      $scope.playerVars = {
        autoplay: 1,
        origin: "http://www.youtube.com"
      }
      var url = 'https://www.youtube.com/embed/' + $scope.playingId + '?enablejsapi=1';
      $scope.playingId = videoId;
      $scope.youtubeUrl = $sce.trustAsResourceUrl(url);
      console.info("videos from search by ycurrentvideo",$scope.playingId);
    }
  }

}
