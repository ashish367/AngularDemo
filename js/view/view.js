app.controller('ViewController', [
	'$scope',
	'$rootScope',
	'$location',
	'$http',
	'youtubeFactory',
	'$sce',
	'youtubeEmbedUtils',
	'$log',
	'$window',
	 function($scope,$rootScope,$location,$http,youtubeFactory,$sce,youtubeEmbedUtils,$log,$window){
		 	var windowHeight = screen.height; //full screen height
			$scope.windowidth = screen.width -16; //full screen height
			$scope.iframeheight = $scope.windowidth * 9/16;
		 	var contentElement = document.getElementById("top");
		 	var currentContentHeight = contentElement.offsetHeight; // youtube video height
		 	var youtubelistcard = ((windowHeight-currentContentHeight)-60);
		 	document.getElementById('list').style.height = youtubelistcard + "px";
		 	document.getElementById('list').style.overflow = "hidden";
		 	var a = document.getElementById("list");
		 	var b = a.offsetHeight;
		 	$scope.youtubelistheight = (b / 4)-5;

		 	var tag = document.createElement('script');
  		tag.id = 'iframe-demo';
  		tag.src = 'https://www.youtube.com/iframe_api';
  		var firstScriptTag = document.getElementsByTagName('script')[0];
  		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  		var player;
  		function onYouTubeIframeAPIReady() {
    		player = new YT.Player('existing-iframe-example', {
					events: {
	          'onReady': onPlayerReady,
	          'onStateChange': onPlayerStateChange
	        }
        });
  		}
  		function onPlayerReady(event) {
    		document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
				event.target.playVideo();
  		}
  		function changeBorderColor(playerStatus) {
	    	var color;
	    	if (playerStatus == -1) {
		      	color = "#37474F"; // unstarted = gray
		    	}else if (playerStatus == 0) {
		      	color = "#FFFF00"; // ended = yellow
		    	}else if (playerStatus == 1) {
		      	color = "#33691E"; // playing = green
		    	}else if (playerStatus == 2) {
		      	color = "#DD2C00"; // paused = red
		    	}else if (playerStatus == 3) {
		      	color = "#AA00FF"; // buffering = purple
		    	}else if (playerStatus == 5) {
		      	color = "#FF6DOO"; // video cued = orange
		    	}
	    	if (color) {
	      	document.getElementById('existing-iframe-example').style.borderColor = color;
	    	}
  		}
		  function onPlayerStateChange(event) {
		    changeBorderColor(event.data);
		  }
			var _apiKey = "AIzaSyBtb7OkQLfSP3GcM9j37otCAKFOfPuXJ3s";
			var artistname = "";
			var trackname = "hum saath ssath hai";
			var searchkeyword = artistname + trackname;
			youtubeFactory.getVideosFromSearchByParams({
			 		key: _apiKey,q: searchkeyword, maxResults: "4", part: 'snippet',order:'relevance',type:'video',videoCategoryId:10,
	 		}).then(function (_response) {
						if (angular.isDefined(_response.error) && _response.error.code == 400) {
										alert("Unable to search for your music video right now. Please try again later");
							}else if (angular.isDefined(_response.data.items) && _response.data.items.length <= 0) {
										 alert("Sorry, we could not find any music videos for "+artistname+"-"+trackname);
							 }else if(angular.isDefined(_response.data.items) && _response.data.items.length > 0 ){
											console.info("videos from search ", _response);
											$scope.ytracklist = _response.data.items;
											console.info("videos from search by ytracklist", $scope.ytracklist);
											$scope.playvideo(_response.data.items[0].id.videoId);
										 if(angular.isDefined(_response.data.prevPageToken)){
			                           $scope.prevPageTokenBoolean = true;
			                           $scope.prevPageTokenValue = _response.data.prevPageToken;
			              	}if(angular.isDefined(_response.data.nextPageToken)){
			                           $scope.nextPageTokenBoolean = true;
			                           $scope.nextPageTokenValue = _response.data.nextPageToken;
			                }
											$scope.$on('youtube.player.ended', function ($event, player) {
			                    // stop plating it again
			                    player.stopVideo();
			                });
										}
			},function(error){
            $log.error("Error fetching Youtube Data: " + error);
            alert("Unable to search for your music video right now. Please try again later");
						$location.path('/');
        });
				$scope.playvideo = function(videoId){
					$scope.playerVars={
						autoplay: 1,
						origin:"http://www.youtube.com"
					}
          $scope.playingId =' eI6T19qPx2Q';
					var url = 'https://www.youtube.com/embed/'+$scope.playingId+'?enablejsapi=1';
					$scope.youtubeUrl = $sce.trustAsResourceUrl(url);
          console.info("videos from search by ycurrentvideo", $scope.youtubeUrl);
        }
		}]);
