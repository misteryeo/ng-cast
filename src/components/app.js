angular.module('video-player')


.directive('app', function() {
  return {
    // TODO
    scope: {},
    bindToController: true,
    controllerAs: 'ctrl',
    templateUrl: 'src/templates/app.html',
    // QUESTION: why do we use 'this' here instead of $scope
    controller: function($scope) {
      console.log($scope);
      this.videos = window.exampleVideoData;
      console.log(this);
      this.selectVideo = function() {};
      this.searchResults = function() {};
      this.currentVideo = this.videos[0];
      this.onClick = function (video) { 
        this.currentVideo = video;
      }.bind(this);
    },
  };
});
