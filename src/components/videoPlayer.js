angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    // TODO
    scope: {
      video: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
