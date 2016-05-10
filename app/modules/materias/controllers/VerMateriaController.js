angular.module('its.materias')
	.controller('VerMateriaController', ['$scope', '$rootScope', '$stateParams', 'APIServices', function($scope, $rootScope, $stateParams, APIServices){

		$scope.materia = {};

		activate = function() {
			console.log($stateParams.id);
			APIServices.getOneSubject($stateParams.id)
				.then(function(res) {
					console.log(res);
					$scope.materia = res.data;
				});
		}

		activate();
		
	}]);