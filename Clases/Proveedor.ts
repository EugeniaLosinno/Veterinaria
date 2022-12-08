/* Datos Proveedores
•	nombre
•	teléfono 
•	id (un número generado aleatoriamente al momento del alta)
 */

import Persona from "./Persona";

export default class Proovedor extends Persona{
    private id: number;

    public constructor(nombre:string, telefono:number, id:number){
        super(nombre, telefono);
        this.id=id;
    }

    public getIdProveedor():number{
        return this.id;
    } 
    public setIdProvoeedor(id:number):void{
        this.id=id;
    }
}