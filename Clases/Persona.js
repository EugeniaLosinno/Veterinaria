"use strict";
/* Datos Persona:
•	nombre
•	teléfono
*/
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Persona.prototype.getNombrePersona = function () {
        return this.nombre;
    };
    Persona.prototype.setNombrePersona = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getTelefonoPersona = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefonoPersona = function (telefono) {
        this.telefono = telefono;
    };
    return Persona;
}());
exports["default"] = Persona;
