(function () {
	'use strict';
	
	return angular
		.module('API', [])
		.factory('APIServices', APIServices);

		APIServices.$inject = ['$http'];

		function APIServices($http) {
			
    		// var url = 'http://localhost:8001'; 
			var url = 'http://itsubscriber.herokuapp.com:80';
			var endpoints = {};
			endpoints = {
				login:     url + '/login/',
				eventos:   url + '/v1/eventos/',
				proyectos: url + '/v1/proyectos/',
				equipos:   url + '/v1/equipos/',
				alumnos:   url + '/v1/alumnos/',
				usuarios:  url + '/v1/usuarios/',
				materias:  url + '/v1/materias/',
				maestros:  url + '/v1/maestros/'
			};

			var services = {
				login: login
			};

			return services;

			// Private functions

			function login(credentials) {
				return $http({
					method: 'POST',
				    url: endpoints.login,
				    data: $.param(credentials),
				    headers: {
				      'Content-Type': 'application/x-www-form-urlencoded'
				    }
				})
				.then(function (res) {
					return res;
				})
				.catch(function (error) {
					return error;
				});
			}
		}

})();