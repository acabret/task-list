const tareas = obtenerTareasDelStorage();
const listaTareas = document.getElementById("lista-de-tareas")
const botonAgregar = document.querySelector('.btn-agregar')
const inputTexto = document.querySelector("input")
imprimirTareas(tareas)

//{id:1, nombre:"asdasd", completado:false }

botonAgregar.addEventListener("click", crearTarea)



function crearTarea(event){

    if(inputTexto.value.trim().length > 0){

        const texto = inputTexto.value.trim()
        const nuevaTarea = { id:34, nombre: texto, completado: false }
        tareas.push(nuevaTarea)
        agregarUnaTarea(nuevaTarea);
        inputTexto.value = ""
    }

}

function agregarUnaTarea(tarea){

    listaTareas.appendChild(crearElementoTarea(tarea))
    guardarTareasEnLocalStorage(tareas)

}


function imprimirTareas(tareas){

    const fragmento = document.createDocumentFragment();

    for (let index = 0; index < tareas.length; index++) {
        fragmento.appendChild(crearElementoTarea(tareas[index]))
    }

    listaTareas.appendChild(fragmento)

}

function crearElementoTarea(tarea){

  const itemLista = document.createElement('li')

  const spanTexto = document.createElement('span')
  spanTexto.innerText = tarea.nombre
  spanTexto.style.position = "relative";

  tarea.completado ? spanTexto.classList.add('tarea-tachada') : spanTexto.classList.remove('tarea-tachada')

  const botonCompletitud = document.createElement('button')
  botonCompletitud.innerText = tarea.completado ? "Cancelar" : "Completar"
  botonCompletitud.classList.add('btn', tarea.completado ? "btn-cancelar" : "btn-completar")

  itemLista.classList.add('tarea')
  itemLista.appendChild(spanTexto)
  itemLista.appendChild(botonCompletitud)

  botonCompletitud.addEventListener("click", function(){
  tarea.completado = !tarea.completado
  botonCompletitud.innerText = tarea.completado ? "Cancelar" : "Completar"
    
    if(tarea.completado){
      spanTexto.classList.add('tarea-tachada')

      botonCompletitud.classList.remove('btn-completar')
      botonCompletitud.classList.add('btn-cancelar')

    }else{
      spanTexto.classList.remove('tarea-tachada')
      
      botonCompletitud.classList.add('btn-completar')
      botonCompletitud.classList.remove('btn-cancelar')
    }

    guardarTareasEnLocalStorage(tareas)


  })

  return itemLista
}


function guardarTarea(tarea) {
  tareas.push(tarea);
  guardarTareasEnStorage(tareas);
}

function guardarTareasEnLocalStorage(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function obtenerTareasDelStorage() {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
  return tareasGuardadas ? tareasGuardadas : [];
}
