angular.module('its.materias')
	.controller('MateriasController', ['APIServices', function(APIServices){
		
		var mmc = this;
		mmc.materias = [];

		function activate () {
		 	APIServices.getSubject()
		 		.then(function(res){
		 			console.log('res', res)
		 			mmc.materias = res.data;
		 		})
		}

		activate();
	}])