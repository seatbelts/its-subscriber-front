angular.module('its.auth')
	.controller('SignupController', ['$scope', '$state', '$rootScope', 'toaster', function($scope, $state, $rootScope, toaster){
		
		console.log('ayyy')
		$scope.model = {};
		$scope.model.username = null;
		$scope.model.first_name = null;
		$scope.model.last_name = null;
		$scope.model.mail = null;
		$scope.model.telefono = null;
		$scope.model.password = null;
		$scope.model.passwordRepeat = null;

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
						case 'first_name':
							toaster.pop('error', 'Falta poner el primer nombre');
							console.log(k);
							return false;
						case 'last_name':
							toaster.pop('error', 'Falta poner los apellidos');
							console.log(k);
							return false;
						case 'mail':
							toaster.pop('error', 'Falta poner el correo');
							console.log(k);
							return false;
						case 'telefono':
							toaster.pop('error', 'Falta el telefono');
							return false;
						case 'password':
							toaster.pop('error', 'Falta poner la contrasena');
							console.log(k);
							return false;
						case 'passwordRepeat':
							toaster.pop('error', 'Se debe repetir la contrasena');
							console.log(k);
							return false;
					}
				} else if (l === s) {
					if (testObject.password != testObject.passwordRepeat) {
						toaster.pop('error', 'Las contrasenas no coinciden');
						console.log('las contrasenas no coinciden');
						return false;
					}
          			return true;
        		}

			}
		}

		$scope.signup = function() {
			$scope.validarObject = $scope.model;
			console.log($scope.validarObject);
			if (validarForm($scope.validarObject)) {
				delete $scope.model.passwordRepeat;
				// Hacer el post
				toaster.pop('success', 'Cuenta Creada');
				$state.go('app.dashboard');
			}
		};

	}]);