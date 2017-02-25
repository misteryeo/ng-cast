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
    template: '<ul><video-list-entry ng-repeat="video in ctrl.videos"></video-list-entry></ul>"',
    tempUrl: 'https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg'
  };
});
