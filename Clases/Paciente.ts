/* Datos Pacientes (mascotas)
•	nombre
•	especie (si no es perro o gato, deberá registrarse como exótica)
•	id del dueño
*/

export default class Paciente{
    private nombre:string;
    private especie: string;
    private exotica: boolean
    private id: number;

    public constructor(nombre:string, especie:string,exotica:boolean, id:number){
        this.nombre=nombre;
        this.especie=especie;
        this.exotica=exotica;
        this.id=id;
    }

    public getNombrePaciente():string{
        return this.nombre;
    } 
    public setNombrePaciente(nombre:string):void{
        this.nombre=nombre;
    }
    
    public getEspeciePaciente():string{
        return this.especie;
    } 
    public setEspeciePaciente(especie:string):void{
        this.especie=especie;
    }

    public getExoticaPaciente():boolean{
        return this.exotica;
    } 
    public setExoticaPaciente(exotica:boolean):void{
        this.exotica=exotica;
    }

    public getIdPaciente():number{
        return this.id;
    } 
    public setIdPaciente(id:number):void{
        this.id=id;
    }
}