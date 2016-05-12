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
							return false;
						case 'first_name':
							toaster.pop('error', 'Información Faltante', 'Ingresar Nombre(s)');
							return false;
						case 'last_name':
							toaster.pop('error', 'Información Faltante', 'Ingresar Apellidos');
							return false;
						case 'email':
							toaster.pop('error', 'Información Faltante', 'Ingresar correo');
							return false;
						case 'telefono':
							toaster.pop('error', 'Información Faltante', 'Ingresar Teléfono');
							return false;
						case 'password':
							toaster.pop('error', 'Información Faltante', 'Ingresar Contraseña');
							return false;
						case 'passwordRepeat':
							toaster.pop('error', 'Información Faltante', 'Repetir contraseña');
							return false;
					}
				} else if (l === s) {
					if (testObject.password != testObject.passwordRepeat) {
						toaster.pop('error', 'Error de Validación', 'Las contraseñas no coinciden');
						return false;
					}
          			return true;
        		}

			}
		}

		$scope.signup = function() {
			$scope.validarObject = $scope.model;
			if (validarForm($scope.validarObject)) {
				delete $scope.model.passwordRepeat;
				// Hacer el post
				APIServices.register($scope.model)
					.then(function(res) {
						if (res.status === 201) {
							// Redirect to dashboard
							$scope.model = {};
							toaster.pop('success', 'Exito', 'La cuenta se creo con exito, ahora inicia sesion');
							$localStorage.user = res.data;
						} else {
							$localStorage.user = {};
							toaster.pop('error', 'Error', 'Error al crear usuario');
						}
					})
			}
		};

	}]);