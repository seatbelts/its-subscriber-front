angular.module('its.materias')
	.controller('MateriasController', ['$scope', '$rootScope', '$state', 'APIServices', function($scope, $rootScope, $state, APIServices){
		var matc = this;

		matc.materias = [];

		$scope.crearMateria = function() {
			$state.go('app.crearmateria');
		}

		$scope.verMateria = function(id) {
			$state.go('app.vermateria', {id: id});
		}

		activate = function() {
			APIServices.getSubject()
				.then(function(res) {
					console.log(res.data);

					matc.materias = res.data;
				})
		};

		activate();
	}]);