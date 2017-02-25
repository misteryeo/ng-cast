angular.module('video-player')

.controller('VideoPlayerControl', ['$scope', function($scope) {
  $scope.videos = window.exampleVideoData;
}])

.directive('app', function() {
  return {
    // TODO
    template: '<div>\
      <video-player></video-player>\
      <video-list></video-list>\
      <search></search>\
      </div>',
    tempUrl: 'https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg'
  };
});
