angular.module('video-player')


.directive('app', ['youTube', function(youTube) {
  return {
    // TODO
    scope: {},
    bindToController: true,
    controllerAs: 'ctrl',
    templateUrl: 'src/templates/app.html',
    // QUESTION: why do we use 'this' here instead of $scope
    controller: function($scope) {
      this.videos = window.exampleVideoData;
      this.selectVideo = function() {};
      this.searchResults = function() {};
      this.currentVideo = this.videos[0];
      this.onClick = function (video) { 
        this.currentVideo = video;
      }.bind(this);
      this.search = youTube.search;
      console.log('what is this', this);
      
      this.search('edward chan', function(response) { 
        console.log('what we want', response); 
        // set videos to be entire response
        this.videos = response;
        this.currentVideo = response[0];
        debugger;
        // set current video to be first video from response
      });
    },
  };
}]);
