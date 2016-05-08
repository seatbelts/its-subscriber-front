angular.module('its.maestros')
	.controller('MaestrosController', ['$state','APIServices', function($state, APIServices) {
		var maemv = this;

		maemv.maestros = [];

		APIServices.getTeachers().then(function(res){
			console.log('res', res.data)
			maemv.maestros = res.data;
		})

		maemv.crearMaestro = function() {
			console.log('test');
			$state.go('app.crear');
		};
	}])