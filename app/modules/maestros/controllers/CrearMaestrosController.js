angular.module('its.maestros')
	.controller('CrearMaestrosController', ['$scope', '$rootScope', 'toaster', 'APIServices', function($scope, $rootScope, toaster, APIServices){
		$scope.maestro = {};

		$scope.crear = function() {
			APIServices.createTeacher($scope.maestro)
				.then(function(res) {
					console.log(res);
				})
		}
	}])