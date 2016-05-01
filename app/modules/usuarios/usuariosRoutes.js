(function() {
	var UsuariosRoutes;
	UsuariosRoutes = function($stateProvider) {
		return $stateProvider.state('app.usuario', {
			url: '/perfil',
			views: {
				'contentView': {
					templateUrl: 'modules/usuarios/views/perfil.html',
					controller: 'UsuarioController'
				}
			}
		});
	};
	return angular.module('its.usuarios').config(UsuariosRoutes);
})();