
let encendido = true; // indicamos si la aplicación esta encendida

// let boton = document.querySelector("#boton")

// boton.onclick = () => {
// console.log("boton activado")
// encendido = true
// };

// console.log(encendido);


//console.log(boton);

// Simulador de agendamiento de turnos

/// CREAMO CLASES para turnos y empleados
// Hacemos una clase para los turnos
class Turno {
  constructor(id = 0, fecha, horario, tienda,cantidad = 5) {
    this.id = id;
    this.fecha = fecha;
    this.horario = horario;
    this.tienda = tienda;
    this.cantidad = cantidad;
    }

    tomarTurno() {
        this.cantidad -= 1;
      }   

}


class TurnoTomado {
    constructor(id = 0, fecha, horario, tienda) {
      this.id = id;
      this.fecha = fecha;
      this.horario = horario;
      this.tienda = tienda;
      }

  }



// Hacemos una clase para los empleados

class Empleado {
    constructor(id = 0, nombre, tienda, cliente) {
      this.id = id;
      this.nombre = nombre;
      this.tienda = tienda;
      this.cliente = cliente;
      }
  }

// Función que recibe el array de turnos por parámetros y los muestra en un listado de la consola
// Se opto por poner en una función aparte ya que tanto en la función de eliminar y agregar empleados necesitamos mostrar
// el listado de turnos, al ser una tarea repetitiva lo más optimo es ponerla en una función y llamara
 const mostrarTurnos = (tabla) => {
 //   console.clear();
    console.log("Turnos Disponibles");
    tabla.forEach(unidad => console.log(unidad));
  };

  const mostrarTurnosTomados = (tabla) => {
//    console.clear();
    console.log("Turnos Tomados");

    tabla.forEach(unidad => console.log(unidad));
  }; 

 
  // Declaramos un array vacío de turnos
let turnos = [
    new Turno(1,"7agosto", "am", "jumbo maipu",3),
    new Turno(2,"7agosto", "am", "jumbo maipu",3),
  ];


  let turnosTomados = [

  ];
  
  mostrarTurnos(turnos);

  mostrarTurnosTomados(turnosTomados);


  // Declaramos un array vacío de turnos
  let empleados = [
    new Empleado(1,"pepe", "jumbo", "maikol"),
  ];
  
//  mostrarTurnos(turnos);

//  mostrarTurnos(turnos);

// función para aumentar incrementalmente el Id de las tablas
const idIncrem = (tabla) => {
    let maxId = Math.max.apply(Math, tabla.map(function(o) { return o.id; }));
    maxId++
    return  maxId
}

console.log(idIncrem(turnos))

// console.log(idIncrem(empleados))


// Función para crear y agregar turnos al array
 const agregarTurno = () => {
// Pedimos los datos del turno
  let id = idIncrem(turnos)
  let fecha = prompt("Ingrese la fecha del turno");
  let horario = prompt("Ingrese la horario del turno");
  let tienda = prompt("Ingrese la tienda del turno");
  let cantidad = prompt("Ingrese la cantidad de turnos");

// Instanciamos la clase Turno y almacenamos en la variable turno con los datos ingresados por el usuario 
  let turno = new Turno(id,fecha,horario,tienda,cantidad);

// Agregamos el empleado en el array turnos
  turnos.push(turno);

// Llamamos la función para que nos muestre la lista de turnos actualizada por consola
  mostrarTurnos(turnos);
}


// Función para eliminar empleados 
const eliminarTurno = () => {
  
    const turnoBuscado = turnoExiste()
    
    if(!turnoBuscado) return
  
    const confirmacion = confirm(`Estas seguro que deseas eliminar el turno ${turnoBuscado.id} ?`)
  
    if(confirmacion) {
      turnos = turnos.filter(turno => turno.id !== turnoBuscado.id); 
      mostrarTurnos(turnos);
    } else {
      alert("Eliminación cancelada")
    }
  };

  const turnoExiste = () => {
    // Le pedimos al usuario el nombre del turno  que desea eliminar
    let idTurno = prompt("Ingrese el numero id del turno");
  
    console.log(idTurno);

    // El método findIndex() busca por un método de comparación el indice donde se encuentra el elemento del array, si no lo encuentra retorna el valor -1
    let indice = turnos.findIndex(
      (turno) => turno.id === parseInt(idTurno)
    );
  
    console.log(indice);

    if (indice === -1) {
      // El return corta la función no deja seguir ejecutando el código que se encuentra después
      return alert(`El turno ${idTurno} no existe`);
    }
  
    return turnos[indice];
  };



  const tomarTurnoEmpleado = () => {
    const turnoBuscado = turnoExiste()
    if(!turnoBuscado) return
  
    //let monto = parseInt(prompt("Ingrese el número del ID del turno que desea tomar"));
    
    // se elimina uno de los turnos disponibles en "cantidad" del turno
    turnoBuscado.tomarTurno();
  
   // Agregamos el turno al array de turnos tomados en el array turnos

   let id = turnoBuscado.id;
   let fecha =  turnoBuscado.fecha;
   let horario = turnoBuscado.horario;
   let tienda = turnoBuscado.tienda;
 
 // Instanciamos la clase Turno y almacenamos en la variable turno con los datos ingresados por el usuario 
   let turno = new TurnoTomado(id,fecha,horario,tienda);

    turnosTomados.push(turno);

    mostrarTurnos(turnos);

    mostrarTurnosTomados(turnosTomados);

    confirm(`El turno ha sido agendado con éxito, la cantidad de horarios disponibles disminuyó`)

  }


while (encendido) {

let admin = prompt("¿Conoce la clave de admin?\n clave: 'admin' \nEscriba 'No' para ingresar como empleado")

if(admin == "admin"){

    alert("Menú principal admin:\nLe recomendamos apagar la app (opción 3) para luego abrir el inspector del browser y la consola, donde podrá ver los prints de JS, luego debe refrescar el browser \n1 - Agregar un turno\n2 - Eliminar un turnos\n3 - Apagar");/// \n3 - Modificar empleado\n4 - Pagar sueldo\n5 - Apagar");
    let opcion = parseInt(prompt("Ingrese una opción"));
  
    switch (opcion) {
      case 1:
        agregarTurno();
        break;
      case 2:
        eliminarTurno();
        break;
      case 3:
        encendido = false;
        break;   
      default:
        alert("Inserte una opción correcta");
    }
  }else{

    alert("Menú principal empleado:\n1 - Tomar turnos\n2 - Apagar");
    let opcion = parseInt(prompt("Ingrese una opción"));

    switch (opcion) {
    case 1:
        tomarTurnoEmpleado();   
    case 2:
        encendido = false;
        break;
    default:
        alert("Inserte una opción correcta");
    }

  }
}