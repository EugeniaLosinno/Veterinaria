/* Datos Persona:
•	nombre
•	teléfono
*/

export default class Persona{
    protected nombre:string;
    protected telefono: number;
  
    public constructor(nombre:string, telefono:number){
        this.nombre=nombre;
        this.telefono=telefono
    }

    public getNombrePersona():string{
        return this.nombre
    } 
    public setNombrePersona(nombre:string):void{
        this.nombre=nombre
    }
    
    public getTelefonoPersona():number{
        return this.telefono
    } 
    public setTelefonoPersona(telefono:number):void{
        this.telefono=telefono
    }
}