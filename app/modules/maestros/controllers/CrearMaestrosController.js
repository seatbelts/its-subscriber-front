angular.module('its.maestros')
	.controller('CrearMaestrosController', ['$scope', '$rootScope', 'toaster', 'APIServices', function($scope, $rootScope, toaster, APIServices){
		$scope.maestro = {};
		$scope.materias = {};

		activate = function() {
			APIServices.getSubject()
                .then(function(res) {
                    $scope.materias = res.data;
                });
		};

		$scope.crear = function() {
			console.log('paso')
			APIServices.createTeachers($scope.maestro)
				.then(function(res) {
					console.log(res);
					if(res.status === 200) {
						toaster.pop('success', 'Exito', 'Se creo al maestro')
					}
				})
		};

		activate();
	}]);