angular.module('video-player')
// Make sure to pass in the $http request in the function parameteres
.service('youTube', function($http, $window) {
  // TODO
 // search function will contain this
  this.search = function (query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true',      
        maxResults: 5
      }
    }).then(function (response) {
      console.log(response);
      callback(response.data.items);
    }, function (response) {
      console.error(response);
    });
  };
});


