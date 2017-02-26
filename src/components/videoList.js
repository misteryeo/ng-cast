angular.module('video-player')


.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    restrict: 'E',
    bindToController: true,
    controller: function() {

    },
    templateUrl: 'src/templates/videoList.html'
  };
});
