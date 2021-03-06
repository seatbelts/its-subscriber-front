angular.module('its.maestros')
	.controller('DetalleMaestroController', ['$scope', '$state', '$stateParams', '$localStorage', '$rootScope', 'APIServices', function($scope, $state, $stateParams, $localStorage, $rootScope, APIServices) {


		$scope.maestro = {};


		activate = function() {
			if (($rootScope.id == $stateParams.id) && $localStorage.user.role == 'admin') {
				APIServices.getOneTeacher($rootScope.id)
					.then(function(res) {
						console.log(res.data);
						$scope.maestro = res.data;
						console.log($scope.maestro);
					});
			} else {
				$state.go('app.dashboard');
			}
		}

		activate();

	}]);