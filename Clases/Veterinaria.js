"use strict";
/*  Datos Veterinaria
•	nombre
•	dirección
•	id (un número generado aleatoriamente al momento del alta)
 */
exports.__esModule = true;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, id) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
    }
    Veterinaria.prototype.getNombreVeterinaria = function () {
        return this.nombre;
    };
    Veterinaria.prototype.setNombreVeterinaria = function (nombre) {
        this.nombre = nombre;
    };
    Veterinaria.prototype.getDireccionVeterinaria = function () {
        return this.direccion;
    };
    Veterinaria.prototype.setDireccionVeterinaria = function (direccion) {
        this.direccion = direccion;
    };
    Veterinaria.prototype.getIdVeterinaria = function () {
        return this.id;
    };
    Veterinaria.prototype.setIdVeterinaria = function (id) {
        this.id = id;
    };
    return Veterinaria;
}());
exports["default"] = Veterinaria;
