angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
    tempUrl: 'https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg',
    template: '<li>\
      <div>\
        {{ctrl.video.snippet.title}}\
        {{ctrl.video.snippet.description}}\
        <img src={{ctrl.video.snippet.thumbnails.default.url}}></img>\
      </div>\
    </li>'
  };
});
