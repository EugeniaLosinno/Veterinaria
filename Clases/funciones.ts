import * as readlineSync from 'readline-sync'
import Cliente from '../Clases/Cliente';
import Paciente from '../Clases/Paciente';
import Proveedor from '../Clases/Proveedor';
import Veterinaria from '../Clases/Veterinaria';   

//La función estaEnUsoID me devuelve Verdadero si la ID esta en uso y falso caso contrario
/* export function estaEnUsoID(idAlta:number,arregloCliente: Array<Cliente>,arregloProveedor:Array<Proveedor>,arregloVeterinaria:Array<Veterinaria>):boolean {
    let laEncontre : boolean = false;
    let i : number = 0;

    //Busco si el ID se encuentra asignado a un Cliente
    while (i < arregloCliente.length && !laEncontre){
        if (arregloCliente[i].getIdCliente() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }
    
    //Busco si el ID se encuentra asignado a un Proveedor
    i = 0;
    while (i < arregloProveedor.length && !laEncontre){
        if (arregloProveedor[i].getIdProveedor() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }

    //Busco si el ID se encuentra asignado a uuna veterinaria
    i = 0;
    while (i < arregloVeterinaria.length && !laEncontre){
        if (arregloVeterinaria[i].getIdVeterinaria() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }

    return(laEncontre);
} */

//La funcion obtenerID me devuelve una ID que no este siendo usado
export function obtenerID(arreglo:Array<number>):number {
    let idAlta : number = 0;
    let estaID : boolean = true;
    while (estaID){ 
       idAlta = Math.floor(Math.random() * 60);
       for(let i=0;i<arreglo.length;i++){
        if (idAlta!=arreglo[i]){
            arreglo.push(idAlta)
            estaID = false;
            
        }else{
            estaID = true
        }
       }
       
    }
    return (idAlta);
}


/* 
export function darDeAltaCliente (arregloCliente: Array<Cliente>, idClienteAlta:number):void {
    // let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ");
    //let telefonoClienteAlta : number = readlineSync.question("Ingrese el teléfono del Cliente a dar de alta: ");
     
    let nombreClienteAlta : string = "Laura";
    let telefonoClienteAlta : number = 2494897563;

    let newCliente = new Cliente(nombreClienteAlta,telefonoClienteAlta,idClienteAlta,false,0);
    arregloCliente.push(newCliente);
}





*/

export function darDeAltaVeterinaria (arregloVeterinaria: Array<Veterinaria>, id:number):void {
    // let nombreVeterinariaAlta : string = readlineSync.question("Ingrese el nombre de la Veterinaria a dar de alta: ");
    //let direccionVeterinariaAlta : string = readlineSync.question("Ingrese la dirección de la Veterinaria a dar de alta: ");
      
    let nombreVeterinariaAlta : string = "Fernando";
    let direccionVeterinariaAlta : string = "San Martín N° 1578";
 
    let newVeterinaria = new Veterinaria(nombreVeterinariaAlta,direccionVeterinariaAlta,id);
    arregloVeterinaria.push(newVeterinaria);
} 

export function darDeAltaCliente (arregloCliente: Array<Cliente>, idClienteAlta:number):void {
    // let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ");
    //let telefonoClienteAlta : number = readlineSync.question("Ingrese el teléfono del Cliente a dar de alta: ");
     
    let nombreClienteAlta : string = "Laura";
    let telefonoClienteAlta : number = 2494897563;

    let newCliente = new Cliente(nombreClienteAlta,telefonoClienteAlta,idClienteAlta,false,0);
    arregloCliente.push(newCliente);
}

export function darDeAltaPaciente (arregloPaciente: Array<Paciente>, idClienteMascota:number):void {
    //let nombrePacienteAlta : string = readlineSync.question("Ingrese el nombre de la Mascota a dar de alta: ");
    //let especiePacienteAlta : string = (readlineSync.question("Ingrese la especie de la Mascota a dar de alta: ")).toUpperCase();
      
    let nombreMascotaAlta : string = "Morena";
    let especieMascotaAlta : string = "GATO";
    let exoticaMascotaAlta : boolean;

    if (especieMascotaAlta == "GATO" || especieMascotaAlta == "PERRO") {
        exoticaMascotaAlta = false;
    } else {
        exoticaMascotaAlta = true;
    }
     
    let newPaciente = new Paciente(nombreMascotaAlta,especieMascotaAlta,exoticaMascotaAlta,idClienteMascota);
    arregloPaciente.push(newPaciente);
}

export function buscarIdCliente(arreglo:Array<Cliente>):number{
    for (let i:number=0; i<arreglo.length;i++){//listar y mostrar clientes id y nombre
        console.log(arreglo[i].getIdCliente + arreglo[i].getNombrePersona())
    }

    let estaID:boolean=false
    while (!estaID){
        let idClienteMascota = Number(readlineSync.question("Ingrese la ID del Clienta al que le desea dar de alta una Mascota: "));
        for (let i:number=0; i<arreglo.length;i++){
            if (idClienteMascota==arreglo[i].getIdCliente()){
                estaID=true
                return idClienteMascota

            }
            console.log("La Id ingresa no es un Cliente");
        }
        
    }
    return 0//para evitar error en la funcion
}



export function darDeAltaProveedor (arregloProveedor: Array<Proveedor>, idProveedorAlta:number):void {
    // let nombreProveedorAlta : string = readlineSync.question("Ingrese el nombre del Proveedor a dar de alta: ");
    //let telefonoProveedorAlta : number = readlineSync.question("Ingrese el teléfono del Proveedor a dar de alta: ");
    let nombreProveedorAlta : string = "Fernando";
    let telefonoProveedorAlta : number = 2494897563;
 
    let newProveedor = new Proveedor(nombreProveedorAlta,telefonoProveedorAlta,idProveedorAlta);
    arregloProveedor.push(newProveedor);
}
//---FUNCIONES BAJAS

export function bajaVeterinarias(arreglo:Array<Veterinaria>){ 
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdVeterinaria()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}
export function bajaClientes(arreglo:Array<Cliente>){ 
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdCliente()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}
export function bajaPacientes(arreglo:Array<Paciente>){
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: ")); 
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdPaciente()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}
export function bajaProveedores(arreglo:Array<Proveedor>){ 
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdProveedor()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}

//FUNCIONES MODIFICACIONES

export function modificarVeterinaria(arreglo:Array<Veterinaria>){
    console.table(arreglo)
    let i:number=0
    let esta:boolean=false
    let id : number = Number(readlineSync.question("Ingrese el ID de CLIENTE que desee Modificar: "));
    while(esta==false && i<arreglo.length){  
        
        if(arreglo[i].getIdVeterinaria()==id ){
            console.table(arreglo[i])
            console.log(`Nombre: ${arreglo[i].getNombreVeterinaria()} \nDireccion: ${arreglo[i].getDireccionVeterinaria()}`);
            let modificador : number = Number(readlineSync.question("\n1)Modificar nombre\n2)Modificar direccion\n"));
            switch(modificador){
                case 1:
                    let nombreNuevo : string =(readlineSync.question(`Modificando-->${arreglo[i].getNombreVeterinaria()}\n`));
                    arreglo[i].setNombreVeterinaria(nombreNuevo)
                    break
                case 2:
                    let direccionNueva : string =(readlineSync.question(`Modificando-->${arreglo[i].getDireccionVeterinaria()}\n`));
                    arreglo[i].setDireccionVeterinaria(direccionNueva)
                    break
                default:
                    break
            }  
            esta=true  
        }else{
            i++
            if(i==arreglo.length){
                console.log("No esta el ID");
                break 
            }
        }
    }
}
//Modificar CLIENTE
export function modificarCliente(arreglo:Array<Cliente>){
    console.table(arreglo)
    let i:number=0
    let esta:boolean=false
    let id : number = Number(readlineSync.question("Ingrese el ID de CLIENTE que desee Modificar: "));
    while(esta==false && i<arreglo.length){  
        if(arreglo[i].getIdCliente()==id ){
            console.table(arreglo[i])
            console.log(`Nombre: ${arreglo[i].getNombrePersona()} \nTelefono: ${arreglo[i].getTelefonoPersona()} `);
            let modificador : number = Number(readlineSync.question("1)Modificar Nombre\n2)modificar TELEFONO:\n"));  
            switch(modificador){
                case 1:
                    let nombreNuevo : string =(readlineSync.question(`Modificando-->${arreglo[i].getNombrePersona()}\n`));
                    arreglo[i].setNombrePersona(nombreNuevo)
                    break
                case 2:
                    let telefonoNuevo : number =Number((readlineSync.question(`Modificando-->${arreglo[i].getTelefonoPersona()}\n`)));
                    arreglo[i].setTelefonoPersona(telefonoNuevo)
                    break

                case 3:
                    //modificar mascota                        
                    break
                
                default:
                    break
            }
            esta=true  
        }else{
            i++
            if(i==arreglo.length){
                console.log("No esta el ID");
                break 
            }

        }
    }
    
}

function menuModificarMascota(){

}


export function modificarProveedor(arreglo:Array<Proveedor>){
    console.table(arreglo)
    let i:number=0
    let esta:boolean=false
    let id : number = Number(readlineSync.question("Ingrese el ID de Proveedor que desee Modificar: "));  

    while(esta==false && i<arreglo.length){
        if(arreglo[i].getIdProveedor()==id){
            console.table(arreglo[i])
            console.log(`Nombre: ${arreglo[i].getNombrePersona()} \nDireccion: ${arreglo[i].getTelefonoPersona()} `);
            let modificador : number = Number(readlineSync.question("1)Modificar Nombre\n2)Modificar Telefono:\n"));
            switch(modificador){
                case 1:
                    let nombreNuevo : string =(readlineSync.question(`Modificando-->${arreglo[i].getNombrePersona()}\n`));
                    arreglo[i].setNombrePersona(nombreNuevo)
                    break
                case 2:
                    let telefonoNuevo : number =Number((readlineSync.question(`Modificando-->${arreglo[i].getTelefonoPersona()}\n`)));
                    arreglo[i].setTelefonoPersona(telefonoNuevo)
                    break
      
                default:
                    break
            }
            esta=true
        }else{
            i++
            if(i==arreglo.length){
                console.log("No esta el ID");
                break 
            }    
        }
    }
}






export function verMenu():number{
    console.log("MENU:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n0)SALIR")
    let op: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    let estaOp : Boolean=false;
    while(!estaOp){        
        switch ( op ) {
            case 1:
                return 1
                estaOp=true
                break
            case 2:
                return 2
                estaOp=true
                break
            case 3:
                return 3
                estaOp=true
                break
            default:  
                console.log("Elija una opcion valida"); 
                break;
        }

    }
    return 0
}