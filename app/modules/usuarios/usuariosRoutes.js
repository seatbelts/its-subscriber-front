angular.module('its.usuarios')
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('app.usuario', {
				url: '/perfil',
				views: {
					'contentView': {
						templateUrl: 'modules/usuarios/views/perfil.html',
						controller: 'UsuarioController',
						controllerAs: 'uc'
					}
				}
			});
	}]);