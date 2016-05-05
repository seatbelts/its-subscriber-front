(function() {
	var UsuarioController;
	UsuarioController = function(APIServices, $localStorage) {

		var uc = this;
		uc.user = {};
		uc.user = $localStorage.user;

		console.log(uc.user)
	};
	return angular.module('its.usuarios').controller('UsuarioController', UsuarioController);
})();