angular.module('video-player')


.directive('app', function() {
  return {
    // TODO
    scope: {},
    restrict: 'E',
    bindToController: true,
    controllerAs: 'ctrl',
    templateUrl: 'src/templates/app.html',
    // QUESTION: why do we use '' here instead of $scope
    controller: function(youTube) {
      this.searchComp = youTube;
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.result = 'test';

      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];
      };

      this.onClick = (video) => {
        this.currentVideo = video;
      };
      console.log('what is this', this);
      youTube.search('american ninja warrior', this.searchResults);

    },
  };
});

