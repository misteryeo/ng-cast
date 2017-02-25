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
    //template: '<ul><video-list-entry ng-repeat="video in ctrl.videos track by $index"></video-list-entry></ul>"',
    templateUrl: 'src/templates/videoList.html'
  };
});
