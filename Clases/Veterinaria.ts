/*  Datos Veterinaria
•	nombre
•	dirección
•	id (un número generado aleatoriamente al momento del alta)
 */

export default class Veterinaria{
    private nombre:string;
    private direccion: string;
    private id: number;

    public constructor(nombre:string, direccion:string, id:number){
        this.nombre=nombre;
        this.direccion=direccion;
        this.id=id;
    }

    public getNombreVeterinaria():string{
        return this.nombre;
    } 
    public setNombreVeterinaria(nombre:string):void{
        this.nombre=nombre;
    }
    
    public getDireccionVeterinaria():string{
        return this.direccion;
    } 
    public setDireccionVeterinaria(direccion:string):void{
        this.direccion=direccion;
    }

    public getIdVeterinaria():number{
        return this.id;
    } 
    public setIdVeterinaria(id:number):void{
        this.id=id;
    }
}