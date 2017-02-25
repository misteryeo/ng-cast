angular.module('video-player')

.controller('VideoPlayerControl', ['$scope', function($scope) {
  $scope.videos = window.exampleVideoData;
}])

.directive('app', function() {
  return {
    // TODO
    templateUrl: 'src/templates/app.html',
    controller: 'VideoPlayerControl'
  };
});
