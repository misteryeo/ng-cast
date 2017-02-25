angular.module('video-player')


.directive('app', function() {
  return {
    // TODO
    scope: {},
    templateUrl: 'src/templates/app.html',
    controller: function($scope) {
      console.log($scope);
      this.videos = window.exampleVideoData;
      console.log(this);
      this.selectVideo = function() {};
      this.searchResults = function() {};
      this.currentVideo = this.videos[0];
      this.onClick = function () { console.log('clicked'); };
    },
    bindToController: true,
    controllerAs: 'ctrl'
  };
});
