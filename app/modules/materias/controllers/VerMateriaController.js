angular.module('its.materias')
	.controller('VerMateriaController', ['$scope', '$rootScope', '$stateParams', 'APIServices', function($scope, $rootScope, $stateParams, APIServices){

		$scope.materia = {};

		activate = function() {
			APIServices.getOneSubject($stateParams.id)
				.then(function(res) {
					$scope.materia = res.data;
				});
		}

		activate();
		
	}]);