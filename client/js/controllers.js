app.controller('MovieController', ['$scope', '$http', function($scope,$http){
  $scope.movies = {};

  $scope.searchMovie = function(movieTitle) {
    $http.get('http://www.omdbapi.com/?s='+ movieTitle).then(function(data){
      $scope.movies = data.search;
    });
  };
}]);