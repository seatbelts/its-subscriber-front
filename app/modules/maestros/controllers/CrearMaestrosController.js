angular.module('its.maestros')
	.controller('CrearMaestrosController', ['$scope', '$rootScope', 'toaster', 'APIServices', '$state', function($scope, $rootScope, toaster, APIServices, $state){
		$scope.maestro = {};
		$scope.materias = {};

		activate = function() {
			APIServices.getSubject()
                .then(function(res) {
                    $scope.materias = res.data;
                });
		};

		$scope.crear = function() {
			APIServices.createTeachers($scope.maestro)
				.then(function(res) {
					console.log(res);
					if(res.status === 201) {
						toaster.pop('success', 'Exito', 'Se creo al maestro');
						$state.go('app.maestros');
					} else {
						toaster.pop('error', 'Error', 'Poo favor verifique la informacion');
					}
				})
		};

		activate();
	}]);