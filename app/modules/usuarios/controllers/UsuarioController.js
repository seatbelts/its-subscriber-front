angular.module('its.usuarios')
	.controller('UsuarioController', ['APIServices', '$localStorage', function(APIServices, $localStorage) {
		var uc = this;
		uc.user = {};
		uc.user = $localStorage.user;
	}]);