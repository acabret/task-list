const tareas = obtenerTareasDelStorage();
const listaTareas = document.getElementById("lista-de-tareas")
const botonAgregar = document.querySelector('.btn-agregar')
const inputTexto = document.querySelector("input")
imprimirTareas(tareas)

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

    const itemLista = document.createElement('li')
    itemLista.innerText = tarea.nombre
    listaTareas.appendChild(itemLista)
    guardarTareasEnLocalStorage(tareas)


}


function imprimirTareas(tareas){

    const fragmento = document.createDocumentFragment();

    for (let index = 0; index < tareas.length; index++) {
        const itemLista = document.createElement('li')
        itemLista.innerText = tareas[index].nombre
        fragmento.appendChild(itemLista)
    }

    listaTareas.appendChild(fragmento)

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
