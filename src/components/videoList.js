angular.module('video-player')


.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
