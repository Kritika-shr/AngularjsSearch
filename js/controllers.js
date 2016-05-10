
var countryControllers = angular.module('countryControllers', []);

countryControllers.controller('ListControllers', ['$scope','$http', function($scope,$http){
	$http.get('js/country.json').success(function(data){
		$scope.country = data;
	});
}]);

countryControllers.controller('DetailsController', [ '$scope','$http','$routeParams', function($scope,$http, $routeParams){
		$http.get('js/country.json').success(function(data){
		$scope.country = data;
		$scope.whichItem = $routeParams.itemId;
	});
}]);
