angular.module('its.proyectos')
    .controller('InscribirController', ['$state', 'APIServices', 'toaster', function($state, APIServices, toaster) {

    	var ipc = this; 
    	ipc.materias = [];
    	ipc.categorias = [];
    	// integrantes del equipo
    	ipc.proyecto = {};
        ipc.proyecto.integrantes = [];
        // TODO Agregar un searchbox o algo para cargar estos
		ipc.alumnos = [];

		// Variable temporal para agregar al arreglo de alumnos del equipo
        ipc.integrante = {};


		// Project model
		ipc.project = {};
		ipc.project = {
			nombre: '',
			description: '', //Remove after
			materia: [],
			mesa : '', //Remove after
			// archivo: '',
			evento: 1, //Default evento 1
			categoria: ''
		};

		ipc.checkSubjects = function (e) {
			if (e.isChecked) {
				ipc.project.materia.push(e);
			} else {
				var pos = ipc.project.materia.indexOf(e);
				ipc.project.materia.splice(pos, 1);
			}
		}

		ipc.addStudent = function (student) {
			var pos = ipc.proyecto.integrantes.indexOf(student);
			if (pos > -1) {
            	toaster.pop('warning', 'Ya ha sido agregado este estudiante');
			} else {
				ipc.proyecto.integrantes.push(student);
            	toaster.pop('success', 'Estudiante agregado');
			}
		};

		ipc.removeStudent = function (student) {
            toaster.pop('warning', 'Estudiante eliminado');
			var pos = ipc.proyecto.integrantes.indexOf(student);
			ipc.proyecto.integrantes.splice(pos, 1);
		}

// nombre = models.CharField(max_length=30)
// description = models.TextField(blank=True, null=True)
// materia = models.ManyToManyField(Materia)
// evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
// mesa = models.CharField(max_length=3, null=True)
// archivo = models.FileField(null=True, upload_to=file_name)
// categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE, null=True)

		function activate () {
		 	APIServices.getSubject()
		 		.then(function(res){
		 			ipc.materias = res.data;
		 		});

		 	APIServices.getCategories()
		 		.then(function(res){
		 			ipc.categorias = res.data;
		 		});

		 	APIServices.getStudents()
		 		.then(function(res){
		 			ipc.alumnos = res.data;
		 		});
		}

		activate();

		// TODO Revisar de nuevo las validaciones
        var validarProyecto = function(testObject) {
            var k, l, s, v;
            s = Object.keys(testObject).length;
            l = 0;
            for (k in testObject) {
                v = testObject[k];
                l++;
                if (!v || v === '') {
                    switch (k) {
                        case 'nombre':
                            toaster.pop('error', 'Falta poner la matricula');
                            console.log(k);
                            return false;
                        case 'categorias':
                            toaster.pop('error', 'Falta poner la contrasena');
                            console.log(k);
                            return false;
                        case 'materias':
                            toaster.pop('error', 'Falta seleccionar material');
                            console.log(k);
                            return false;
                        case 'categorias':
                            toaster.pop('error', 'Falta seleccionar categoria');
                            console.log(k);
                            return false;
                    }
                } else if (l === s) {
                    return true;
                }

            }
        }

        ipc.inscribir = function() {
            ipc.validarProy = ipc.proyecto;
            if (validarProyecto(ipc.validarProy)) {
                toaster.pop('success', 'Proyecto Creado');
            }
        };

    }]);
