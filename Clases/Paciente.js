"use strict";
/* Datos Pacientes (mascotas)
•	nombre
•	especie (si no es perro o gato, deberá registrarse como exótica)
•	id del dueño
*/
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, exotica, id) {
        this.nombre = nombre;
        this.especie = especie;
        this.exotica = exotica;
        this.id = id;
    }
    Paciente.prototype.getNombrePaciente = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombrePaciente = function (nombre) {
        this.nombre = nombre;
    };
    Paciente.prototype.getEspeciePaciente = function () {
        return this.especie;
    };
    Paciente.prototype.setEspeciePaciente = function (especie) {
        this.especie = especie;
    };
    Paciente.prototype.getExoticaPaciente = function () {
        return this.exotica;
    };
    Paciente.prototype.setExoticaPaciente = function (exotica) {
        this.exotica = exotica;
    };
    Paciente.prototype.getIdPaciente = function () {
        return this.id;
    };
    Paciente.prototype.setIdPaciente = function (id) {
        this.id = id;
    };
    return Paciente;
}());
exports["default"] = Paciente;
