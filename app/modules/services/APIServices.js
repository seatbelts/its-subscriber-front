(function() {
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
            login: url + '/login/',
            eventos: url + '/v1/eventos/',
            proyectos: url + '/v1/proyectos/',
            equipos: url + '/v1/equipos/',
            alumnos: url + '/v1/alumnos/',
            usuarios: url + '/v1/usuarios/',
            materias: url + '/v1/materias/',
            maestros: url + '/v1/maestros/'
        };

        var services = {
            login: login,
            getMaterias: getMaterias
        };

        return services;

        // Private functions
        function response(res) {
            return res;
        }

        function login(credentials) {
            return $http({
                    method: 'POST',
                    url: endpoints.login,
                    data: $.param(credentials),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response)
                .catch(response);
        }


        Events
        Projects
        Teams
        Students
        Subject
        Teachers

        eventos
        proyectos
        equipos
        alumnos
        materias
        maestros

        /*
         * Create Services
         */

        function createEvents(data) {
            return $http.post(endpoints.eventos, data)
                .then(response)
                .catch(response);
        }

        function createProjects(data) {
            return $http.post(endpoints.proyectos, data)
                .then(response)
                .catch(response);
        }

        function createTeams(data) {
            return $http.post(endpoints.equipos, data)
                .then(response)
                .catch(response);
        }

        function createStudents(data) {
            return $http.post(endpoints.alumnos, data)
                .then(response)
                .catch(response);
        }

        function createSubject(data) {
            return $http.post(endpoints.materias, data)
                .then(response)
                .catch(response);
        }

        function createTeachers(data) {
            return $http.post(endpoints.maestros, data)
                .then(response)
                .catch(response);
        }

        /*
         * Read Services
         */

        function getEvents() {
            return $http.get(endpoints.eventos)
                .then(response)
                .catch(response);
        }

        function getProjects() {
            return $http.get(endpoints.proyectos)
                .then(response)
                .catch(response);
        }

        function getTeams() {
            return $http.get(endpoints.equipos)
                .then(response)
                .catch(response);
        }

        function getStudents() {
            return $http.get(endpoints.alumnos)
                .then(response)
                .catch(response);
        }

        function getSubject() {
            return $http.get(endpoints.materias)
                .then(response)
                .catch(response);
        }

        function getTeachers() {
            return $http.get(endpoints.maestros)
                .then(response)
                .catch(response);
        }

        /*
         * Update Services
         */

        function updateEvents(url, obj) {
            return $http.put(url, obj)
                .then(response)
                .catch(response);
        }

        function updateProjects(url, obj) {
            return $http.put(url, obj)
                .then(response)
                .catch(response);
        }

        function updateTeams(url, obj) {
            return $http.put(url, obj)
                .then(response)
                .catch(response);
        }

        function updateStudents(url, obj) {
            return $http.put(url, obj)
                .then(response)
                .catch(response);
        }

        function updateSubject(url, obj) {
            return $http.put(url, obj)
                .then(response)
                .catch(response);
        }

        function updateTeachers(url, obj) {
            return $http.put(url, obj)
                .then(response)
                .catch(response);
        }

        /*
         * Delete Services
         */

        function deleteEvents(url) {
            return $http.delete(url)
                .then(response)
                .catch(response);
        }

        function deleteProjects(url) {
            return $http.delete(url)
                .then(response)
                .catch(response);
        }

        function deleteTeams(url) {
            return $http.delet(url)
                .then(response)
                .catch(response);
        }

        function deleteStudents(url) {
            return $http.delete(url)
                .then(response)
                .catch(response);
        }

        function deleteSubject(url) {
            return $http.delete(url)
                .then(response)
                .catch(response);
        }

        function deleteTeachers(url) {
            return $http.delete(url)
                .then(response)
                .catch(response);
        }
    }

})();
