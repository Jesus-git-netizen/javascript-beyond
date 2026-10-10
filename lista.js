const entrada=document.getElementById("entrada");
const agregar=document.getElementById("agregar");
const lista=document.getElementById("lista");
const numero= document.getElementById("contador");

const reiniciar=document.getElementById("reiniciar")
let contador=0;

agregar.addEventListener("click", function(){
    const texto=entrada.value.trim();
    if(texto===""){
        return;
    }
    
    const li=document.createElement("li");

    const spanElemento=document.createElement("span");
    spanElemento.textContent=texto;

    spanElemento.addEventListener("click", function(){
        spanElemento.classList.toggle("completada");
        console.log("test");
        actualizar();

    });

    const botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar";

    botonEliminar.addEventListener("click", function(){
    li.remove();
    contador--;
    actualizar();
})
    li.appendChild(spanElemento);
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    entrada.value="";
    contador++;
    actualizar();
});

reiniciar.addEventListener("click", function(){
    lista.innerHTML="";
    contador=0;
    actualizar();
    
});

function actualizar(){
    const pendientes=document.querySelectorAll("li span:not(.completada").length;
    numero.textContent="Tareas pendientes: " + pendientes;
}