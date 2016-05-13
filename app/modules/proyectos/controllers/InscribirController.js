angular.module('its.proyectos')
    .controller('InscribirController', ['$state', '$scope', 'APIServices', 'toaster', '$localStorage', 'Upload',
        function($state, $scope, APIServices, toaster, $localStorage, Upload) {

        $scope.archivo = {};

        var ipc = this;
        // Arreglos con promises de los servicios
        ipc.materias = [];
        ipc.categorias = [];
        ipc.alumnos = [];

        // Variable temporal para agregar al arreglo de alumnos del equipo
        ipc.integrante = {};

        // Project model
        ipc.project = {};
        ipc.project = {
            nombre: '',
            description: '', //Remove after
            mesa: '0', //Remove after
            // archivo: '',
            // evento: 1, //Default evento 1
            categoria: '',
            materia: [],
            integrantes: []
        };

        ipc.team = {};
        ipc.team = {
            nombre: '',
            usuario: APIServices.getUrl() + '/v1/usuarios/'+ $localStorage.user.id + '/',
            proyecto: '',
            lider: APIServices.getUrl() + '/v1/alumnos/'+ $localStorage.user.username + '/',
            integrantes: []
        };

        ipc.checkSubjects = function(e) {
            if (e.isChecked) {
                ipc.project.materia.push(e);
            } else {
                var pos = ipc.project.materia.indexOf(e);
                ipc.project.materia.splice(pos, 1);
            }
        }

        ipc.addStudent = function(student) {
            var pos = ipc.project.integrantes.indexOf(student);
            if (pos > -1) {
                toaster.pop('warning', 'Ya ha sido agregado este estudiante');
            } else {
                ipc.project.integrantes.push(student);
                toaster.pop('success', 'Estudiante agregado');
            }
        };

        ipc.removeStudent = function(student) {
            toaster.pop('warning', 'Estudiante eliminado');
            var pos = ipc.project.integrantes.indexOf(student);
            ipc.project.integrantes.splice(pos, 1);
        }

        function activate() {
            APIServices.getSubject()
                .then(function(res) {
                    ipc.materias = res.data;
                });

            APIServices.getCategories()
                .then(function(res) {
                    ipc.categorias = res.data;
                });

            APIServices.getStudents()
                .then(function(res) {
                    ipc.alumnos = res.data;
                    ipc.alumnos.forEach( function(element, index) {
                        element.fullName = element.nombre + ' ' + element.apellidos;
                    });
                });
        }

        activate();

        $scope.selectUser = function(data) {
            if (data) {
                ipc.addStudent(data.originalObject);
            }
        }

        $scope.upload = function (id, obj) {
                Upload.upload({
                    url: 'http://itsubscriber-dev.herokuapp.com:80/v1/proyectos/' + id,
                    data: {data: obj},
                    method: 'PUT',
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then(function (resp) {
                    console.log('success');
                    //console.log('Success ' + resp.config.data.archivo.name + 'uploaded. Response: ' + resp.data);
                }, function (resp) {
                    console.log('Error status: ' + resp.status);
                }, function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.archivo.name);
                });
            };


        ipc.inscribir = function() {

            // TODO Validar magicamente 
            // ipc.validarProy = ipc.proyecto;
            // if (validarProyecto(ipc.validarProy)) {
            //     toaster.pop('success', 'Proyecto Creado');
            // }

            var data = {
				nombre: ipc.project.nombre,
				description: ipc.project.description,
				categoria: ipc.project.categoria.url,
				evento: 'http://itsubscriber-dev.herokuapp.com:80/v1/eventos/1/',
				mesa: ipc.project.mesa,
				// Check this service
				archivo: ipc.project.archivo,
				materia: []
            };
			ipc.project.materia.forEach( function(element, index) {
				data.materia.push(element.url);
			});



            APIServices.createProjects(data)
            	.then(function(res){
                    if (res.status === 201) {
                        var project = res.data;
                        var data = {
                            nombre: ipc.team.nombre,
                            usuario: ipc.team.usuario,
                            proyecto: res.data.url,
                            lider: ipc.team.lider,
                            integrantes: []
                        };

                        /*project.archivo = $scope.archivo;

                        console.log(project);

                        $scope.upload(project.id, project);*/

                        /*APIServices.updateProjects(project.id, project)
                            .then(function(res) {
                                console.log(res);
                            });*/


                        ipc.project.integrantes.forEach( function(element, index) {
                            data.integrantes.push(element.url);
                        });

                        APIServices.createTeams(data)
                            .then(function(res){
                            })

                    	toaster.pop('success', 'Proyecto creado');

                        $state.go('app.proyectos');
                    } else {
                        toaster.pop('error', 'No se pudo crear el proyecto');
                    }
            	})
            	.catch(function (error) {
                	toaster.pop('warning', 'Ha ocurrido un problema');
            	});
        };
    }]);
