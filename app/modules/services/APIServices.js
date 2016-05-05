(function () {
	'use strict';
	
	return angular
		.module('API', [])
		.factory('APIServices', APIServices);

		APIServices.$inject = ['$http'];

		function APIServices($http) {

			var url = 'http://localhost:8001';
			var endpoints = {};
			endpoints.login = url + '/login/';

			var services = {
				login: login
			};

			return services;

			// Private functions

			function login(credentials) {
				return $http({
					method: 'POST',
				    url: url + '/login/',
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