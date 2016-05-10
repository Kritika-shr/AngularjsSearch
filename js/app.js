var myApp = angular.module('myApp', [

	'ngRoute',
	'countryControllers'

	]);

myApp.config(['$routeProvider', function($routeProvider){

		$routeProvider.
		when('/list',{
			templateUrl: 'partials/list.php',
			controller:'ListControllers'
		}).
		when('/details/:itemId',{
			templateUrl:'partials/details.php',
			controller:'DetailsController'

		}).
		otherwise({
			redirectTo:'/list'
		});
}]);