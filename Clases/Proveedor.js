"use strict";
/* Datos Proveedores
•	nombre
•	teléfono
•	id (un número generado aleatoriamente al momento del alta)
 */
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
var Persona_1 = require("./Persona");
var Proovedor = /** @class */ (function (_super) {
    __extends(Proovedor, _super);
    function Proovedor(nombre, telefono, id) {
        var _this = _super.call(this, nombre, telefono) || this;
        _this.id = id;
        return _this;
    }
    Proovedor.prototype.getIdProveedor = function () {
        return this.id;
    };
    Proovedor.prototype.setIdProvoeedor = function (id) {
        this.id = id;
    };
    return Proovedor;
}(Persona_1["default"]));
exports["default"] = Proovedor;
