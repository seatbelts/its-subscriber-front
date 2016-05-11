angular.module('its.auth')

	.controller('LoginController', ['$scope', '$state', '$rootScope', 'APIServices', 'toaster', '$localStorage',
		function($scope, $state, $rootScope, APIServices, toaster, $localStorage){
		
		$localStorage.user = {};

		$scope.model = {};
		$scope.model.username = null;
		$scope.model.password = null;

		var validarForm = function (testObject) {
			var k, l, s, v;
		    s = Object.keys(testObject).length;
      		l = 0;
			for (k in testObject) {
				v = testObject[k];
				l++;
				if (!v || v === '') {
					switch(k) {
						case 'username':
							toaster.pop('error', 'Falta poner la matricula');
							return false;
						case 'password':
							toaster.pop('error', 'Falta poner la contrasena');
							return false;
					}
				} else if (l === s) {
				    return true;
        		}

			}
		}

		$scope.login = function() {
			$scope.validarObject = $scope.model;
			if (validarForm($scope.validarObject)){
				APIServices.login($scope.model)
					.then(function (res) {
						console.log('APIServices', res);
						if (res.status === 200) {
							// Redirect to dashboard
							console.log('Redirect to dashboard')
							toaster.pop('success', 'Exito', 'Login exitoso');
							$localStorage.user = res.data;
							$state.go('app.dashboard');
						} else {
							$localStorage.user = {};
							toaster.pop('error', 'Error', 'Error al iniciar sesion');
							console.log('Unable to log');
						}
					});
				}
		};

	}]);