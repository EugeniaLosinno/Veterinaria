import * as readlineSync from 'readline-sync'
import Cliente from './Clases/Cliente';
import Paciente from './Clases/Paciente';
import Proveedor from './Clases/Proveedor';
import Veterinaria from './Clases/Veterinaria';   

//La función estaEnUsoID me devuelve Verdadero si la ID esta en uso y falso caso contrario. Lo busca en el arreglo de ID
export function estaEnUsoID(idAlta:number, arregloID:Array<number>):boolean {
    let laEncontre : boolean = false;
    let i : number = 0;

    while (i < arregloID.length && !laEncontre){
        if (arregloID[i] == idAlta){
            laEncontre = true;
        }else{ i++;}
    }
    
    return(laEncontre);
}

//La funcion obtenerID me devuelve una ID que no este siendo usado
export function obtenerID(arregloID:Array<number>):number {
    let idAlta : number = 0;
    let estaID : boolean = false;
    
    while (!estaID){ 
       idAlta = Math.floor(Math.random() * 60);
       if (!estaEnUsoID(idAlta,arregloID)) {
            arregloID.push(idAlta)
            estaID = true;
        }
    }
    return (idAlta);
}

export function darDeAltaVeterinaria (arregloVeterinaria: Array<Veterinaria>, id:number):void {
    let nombreVeterinariaAlta : string = readlineSync.question("Ingrese el nombre de la Veterinaria a dar de alta: ").toUpperCase();
    let direccionVeterinariaAlta : string = readlineSync.question("Ingrese la direccion de la Veterinaria a dar de alta: ").toUpperCase();
      
    let newVeterinaria = new Veterinaria(nombreVeterinariaAlta,direccionVeterinariaAlta,id);
    
    arregloVeterinaria.push(newVeterinaria);
    console.log("Se dió de alta la Veterinaria:");
    console.table(newVeterinaria);
    console.log("Las Veterinarias activas son:");
    console.table(arregloVeterinaria);
} 

export function darDeAltaCliente (arregloCliente: Array<Cliente>, idClienteAlta:number):void {
    let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ").toUpperCase();
    let telefonoClienteAlta : number = Number(readlineSync.question("Ingrese el telefono del Cliente a dar de alta: "));
     
    let newCliente = new Cliente(nombreClienteAlta,telefonoClienteAlta,idClienteAlta,false,0);
    
    arregloCliente.push(newCliente);
    console.log("Se dió de alta al Cliente:");
    console.table(newCliente);
    console.log("Los Clientes activos son:");
    console.table(arregloCliente);
}

export function darDeAltaPaciente (arregloPaciente: Array<Paciente>, idClienteMascota:number):void {
    let nombreMascotaAlta : string = readlineSync.question("Ingrese el nombre de la Mascota a dar de alta: ").toUpperCase();
    let especieMascotaAlta : string = readlineSync.question("Ingrese la especie de la Mascota a dar de alta: ").toUpperCase();
      
    let exoticaMascotaAlta : boolean;

    if (especieMascotaAlta == "GATO" || especieMascotaAlta == "PERRO") {
        exoticaMascotaAlta = false;
    } else {
        exoticaMascotaAlta = true;
    }
     
    let newPaciente = new Paciente(nombreMascotaAlta,especieMascotaAlta,exoticaMascotaAlta,idClienteMascota);
    
    arregloPaciente.push(newPaciente);
    console.log("Se dió de alta al Paciente:");
    console.table(newPaciente);
    console.log("Los Pacientes activos son:");
    console.table(arregloPaciente);
}

export function darDeAltaProveedor (arregloProveedor: Array<Proveedor>, idProveedorAlta:number):void {
    let nombreProveedorAlta : string = readlineSync.question("Ingrese el nombre del Proveedor a dar de alta: ").toUpperCase();
    let telefonoProveedorAlta : number = Number(readlineSync.question("Ingrese el telefono del Proveedor a dar de alta: "));
    
    let newProveedor = new Proveedor(nombreProveedorAlta,telefonoProveedorAlta,idProveedorAlta);
    
    arregloProveedor.push(newProveedor);
    console.log("Se dió de alta al Proveedor:");
    console.table(newProveedor);
    console.log("Las Proveedore activos son:");
    console.table(arregloProveedor);
}

export function buscarIdCliente(arregloCliente:Array<Cliente>):number {
    //listar y mostrar clientes id y nombre
    console.log();
    console.log("Listado de Clientes");
    for (let i:number=0; i<arregloCliente.length;i++){
        console.log(arregloCliente[i].getIdCliente() + " " + arregloCliente[i].getNombrePersona());
    }

    let estaID:boolean = false;
    while (!estaID){
        let idClienteMascota = Number(readlineSync.question("Ingrese la ID del Clienta al que le desea dar de alta una Mascota: "));
        for (let i:number=0; i<arregloCliente.length;i++){
            if (idClienteMascota==arregloCliente[i].getIdCliente()){
                estaID = true;
                return idClienteMascota;
            }
            console.log("La Id ingresa no es un Cliente");
        }
        
    }
    return 0;   //para evitar error en la funcion
}

//---Funciones para dar las bajas
export function darDeBajaIDArreglo (id:number, arregloID:Array<number>){
    let i: number = 0;
    while (i < arregloID.length){    
        if(id == arregloID[i]){
            arregloID.splice(i,1)
        }else{
            i++;
        }
    }
}

export function darDeBajaVeterinaria (arregloVeterinaria:Array<Veterinaria>, arregloID:Array<number>){ 
    let idBajaVeterinaria : number = Number(readlineSync.question("Ingrese el ID de Veterinaria que desee borrar: "));
    let estaID : boolean = false;
    let i : number = 0;

    while (!estaID && i < arregloVeterinaria.length){    
        if(idBajaVeterinaria == arregloVeterinaria[i].getIdVeterinaria()){
            arregloVeterinaria.splice(i,1)
            console.log(`La Vetrinaria ${idBajaVeterinaria} fue borrada`);
            darDeBajaIDArreglo(idBajaVeterinaria,arregloID);
            estaID = true;
        }else{
            i++;
        }
    }
    if(!estaID){
        console.log("La ID de Veterinaria ingresada no existe");
        console.table(arregloVeterinaria);
    }
}

export function darDeBajaCliente(arregloCliente:Array<Cliente>, arregloPaciente:Array<Paciente>, arregloID:Array<number>){ 
    let idBajaCliente : number = Number(readlineSync.question("Ingrese el ID del Cliente que desee borrar: "));
    let estaID : boolean = false;
    let i : number = 0;

    while (!estaID && i < arregloCliente.length){    
        if(idBajaCliente == arregloCliente[i].getIdCliente()){
            arregloCliente.splice(i,1)
            console.log(`El Cliente ${idBajaCliente} fue borrado`);
            darDeBajaIDArreglo(idBajaCliente,arregloID);
            darDeBajaPacienteCliente(arregloPaciente,idBajaCliente);
            estaID = true;
        }else{
            i++;
        }
    }
    if(!estaID){
        console.log("La ID del Cliente ingresado no existe");
        console.table(arregloCliente);
    }
}

export function darDeBajaPacienteCliente (arregloPaciente:Array<Paciente>, idClienteBaja:number){
   
    for (let i:number=0; i<arregloPaciente.length; i++){
        if(idClienteBaja == arregloPaciente[i].getIdPaciente()){
            arregloPaciente.splice(i,1)
        }
    }
}

export function darDeBajaPaciente (arregloPaciente:Array<Paciente>){
    /// agregar ID
    let nombreMascotaBaja : string = readlineSync.question("Ingrese el nombre de la Mascota que desea borra: ").toUpperCase();
    let estaNombre : boolean = false;
    let i : number = 0;

    while (!estaNombre && i < arregloPaciente.length){    
        if(nombreMascotaBaja == arregloPaciente[i].getNombrePaciente()){
            arregloPaciente.splice(i,1)
            console.log(`El Paciente ${nombreMascotaBaja} fue borrado`);
            estaNombre = true;
        }else{
            i++;
        }
    }
    if(!estaNombre){
        console.log("El nombre del Paciente ingresado no existe");
        console.table(arregloPaciente);
    }
}    

export function darDeBajaProveedor (arregloProveedor:Array<Proveedor>, arrrayID:Array<number>){ 
    let idBajaProveedor : number = Number(readlineSync.question("Ingrese el ID del proveedor que desee borrar: "));
    let estaID: boolean = false;
    let i : number = 0;

    while (!estaID && i < arregloProveedor.length){    
        if(idBajaProveedor == arregloProveedor[i].getIdProveedor()){
            arregloProveedor.splice(i,1)
            console.log(`El Proveedor ${idBajaProveedor} fue borrado`);
            estaID = true;
        }else{
            i++;
        }
    }
    if(!estaID){
        console.log("El ID del Proveedor ingresado no existe");
        console.table(arregloProveedor);
    }
}

export function verMenuPrincipal():number{
    console.log();
    console.log("MENU:\n1)MENU VETERINARIAS \n2)MENU CLIENTES \n3)MENU PACIENTES \n4)MENU PROVEEDORES \n0)SALIR")
    let opcionMP: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMP
}

export function verMenuSecundario():number{
    console.log();
    console.log("MENU:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n0)SALIR")
    let opcionMS: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMS
}