angular.module('its.auth')
	.controller('SignupController', ['$scope', '$state', '$rootScope', '$localStorage', 'toaster', 'APIServices', function($scope, $state, $rootScope, $localStorage, toaster, APIServices){
		
		$scope.model = {};
		$scope.model.username = null;
		$scope.model.first_name = null;
		$scope.model.last_name = null;
		$scope.model.email = null;
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
							toaster.pop('error', 'Información Faltante', 'Ingresar Matrícula');
							console.log(k);
							return false;
						case 'first_name':
							toaster.pop('error', 'Información Faltante', 'Ingresar Nombre(s)');
							console.log(k);
							return false;
						case 'last_name':
							toaster.pop('error', 'Información Faltante', 'Ingresar Apellidos');
							console.log(k);
							return false;

						case 'email':
							toaster.pop('error', 'Información Faltante', 'Ingresar correo');
							console.log(k);
							return false;
						case 'telefono':
							toaster.pop('error', 'Información Faltante', 'Ingresar Teléfono');
							return false;
						case 'password':
							toaster.pop('error', 'Información Faltante', 'Ingresar Contraseña');
							console.log(k);
							return false;
						case 'passwordRepeat':
							toaster.pop('error', 'Información Faltante', 'Repetir contraseña');
							console.log(k);
							return false;
					}
				} else if (l === s) {
					if (testObject.password != testObject.passwordRepeat) {
						toaster.pop('error', 'Error de Validación', 'Las contraseñas no coinciden');
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
				console.log($scope.model);
				// Hacer el post
				APIServices.register($scope.model)
					.then(function(res) {
						console.log('APIServices', res);
						if (res.status === 201) {
							// Redirect to dashboard
							console.log('Redirect to dashboard')
							toaster.pop('success', 'Exito', 'La cuenta se creo con exito');
							$localStorage.user = res.data;
						} else {
							$localStorage.user = {};
							toaster.pop('error', 'Error', 'Error al crear usuario');
							console.log('Unable to log');
						}
					})
				toaster.pop('success', '!Correcto¡', 'Cuenta Creada');
				$state.go('app.dashboard');
			}
		};

	}]);