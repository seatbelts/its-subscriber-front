angular.module('its.maestros')
	.controller('MaestrosController', ['$state', 'APIServices', function($state, APIServices) {
		
		var msc = this;
		msc.maestros = [];

		msc.crearMaestro = function() {
			console.log('test');
			$state.go('app.crear');
		};


		function activate () {
		 	APIServices.getTeachers()
		 		.then(function(res){
		 			console.log('res', res)
		 			msc.maestros = res.data;
		 		})
		}

		activate();
	}])