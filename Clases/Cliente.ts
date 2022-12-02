/* Datos Cliente:
•	nombre
•	teléfono
•	VIP (cliente recurrente, en el cual se guarda el número de visitas e incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 o más)
•	id (un número generado aleatoriamente al momento del alta)
*/
import Persona from './Persona';

export default class Cliente extends Persona{
    private vip:boolean;
    private id: number;
    private nroVisitas:number;
    
    public constructor(nombre:string, telefono:number, id:number, vip:boolean, nroVisitas:number){
        super(nombre, telefono);
        this.id=id;
        this.vip=vip;
        this.nroVisitas=nroVisitas
    }
    private calificarVip(){//creamos una funcion que setee automaticamente la condicion del cliente VIP o NO
        if(this.nroVisitas>=5){
            this.vip=true
        }else{
            this.vip=false
        }
    }

    private contarVisitas(){//funcion para sumar visitas al cliente
        this.nroVisitas++
    }

    public getIdCliente():number{
        return this.id;
    } 
    public setIdCliente(id:number):void{
        this.id=id;
    }
    public getVipCliente():boolean{
        return this.vip;
    } 
    public setVipCliente(vip:boolean):void{
        this.vip=vip;
    }

    private getNroVisitas():number{
        return this.nroVisitas
    } 
   
}