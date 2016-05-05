angular.module('its.auth')

	.controller('LoginController', ['$scope', '$state', '$rootScope', 'APIServices', 'toaster', function($scope, $state, $rootScope, APIServices, toaster){
		
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
							console.log(k);
							return false;
						case 'password':
							toaster.pop('error', 'Falta poner la contrasena');
							console.log(k);
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
							$rootScope.token = res.data.token;
							// Redirect to dashboard
							console.log('Redirect to dashboard')
							toaster.pop('success', 'Exito', 'Login exitoso');
							$state.go('app.dashboard');
						} else {
							$rootScope.token = '';
							// TODO add a toaster with "unable to log or something like that"
							toaster.pop('error', 'Error al iniciar sesion');
							console.log('Unable to log');
						}
					});
				}
		};

	}]);