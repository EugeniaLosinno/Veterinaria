"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* Datos Cliente:
•	nombre
•	teléfono
•	VIP (cliente recurrente, en el cual se guarda el número de visitas e incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 o más)
•	id (un número generado aleatoriamente al momento del alta)
*/
var Persona_1 = require("./Persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, telefono, id, vip, nroVisitas) {
        var _this = _super.call(this, nombre, telefono) || this;
        _this.id = id;
        _this.vip = vip;
        _this.nroVisitas = nroVisitas;
        return _this;
    }
    Cliente.prototype.calificarVip = function () {
        if (this.nroVisitas >= 5) {
            this.vip = true;
        }
        else {
            this.vip = false;
        }
    };
    Cliente.prototype.contarVisitas = function () {
        this.nroVisitas++;
    };
    Cliente.prototype.getIdCliente = function () {
        return this.id;
    };
    Cliente.prototype.setIdCliente = function (id) {
        this.id = id;
    };
    Cliente.prototype.getVipCliente = function () {
        return this.vip;
    };
    Cliente.prototype.setVipCliente = function (vip) {
        this.vip = vip;
    };
    Cliente.prototype.getNroVisitas = function () {
        return this.nroVisitas;
    };
    return Cliente;
}(Persona_1["default"]));
exports["default"] = Cliente;
