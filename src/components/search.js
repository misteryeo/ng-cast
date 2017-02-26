angular.module('video-player')

.directive('search', function() {
  return {
    // TODO
    scope: {
      result: '<', // searchResults from app
      search: '<' // youTube.search from app
    },
    controllerAs: 'ctrl',
    restrict: 'E',
    bindToController: true,
    controller: function() {
      this.handClick = () => {
        this.searchComp.search(this.input, (data) => {
          this.result(data);
        });
      };
    },    
    templateUrl: 'src/templates/search.html'
  };
});
