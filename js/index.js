var main = document.getElementById("main");
var diverror = document.querySelector(".divError");
var mensajeError = document.querySelector(".mensajeError");
var divFiltrador = document.querySelector(".divFiltrador");
var menuDesplegable = document.querySelector(".menuDesplegable");
var africa = document.querySelector(".africa");
var divPaises = document.querySelector(".divPaises");

const traerDatos = async () => {
    try {
        let response = await fetch("https://restcountries.eu/rest/v2/all");
        let data = await response.json();
        mostrarDatos(data);

    } catch (error) {
        setTimeout(() => {
            diverror.style.display = "block";
            mensajeError.innerHTML = error;
            console.log(error);
        }, 3000); 
    }
}

document.addEventListener("DOMContentLoaded", traerDatos)

function mostrarDatos(datos) {
    datos.forEach(data => {
        //DECLARACION DE VARIABLES
        let a = document.createElement("a");
        let div = document.createElement("div");
        let imagen = document.createElement("img");
        let pais = document.createElement("p");
        let poblacion = document.createElement("p");
        let region = document.createElement("p");
        let capital = document.createElement("p");

        //ESTILOS 
        imagen.classList.add("claseParaLaImagen");
        div.classList.add("claseParaEldiv");
        div.style.fontWeight = "300"
        pais.style.fontWeight = "800";
        pais.style.fontSize = "17px";
        pais.classList.add("claseParaLosP");
        poblacion.classList.add("claseParaLosP");
        region.classList.add("claseParaLosP");
        capital.classList.add("claseParaLosP");

        //TRAER LOS DATOS
        imagen.src = data.flag;
        imagen.alt = `Bandera de ${data.name}`
        pais.innerHTML = data.name;
        poblacion.innerHTML = `<b>Poblacion:</b>  ${data.population}`;
        region.innerHTML = `<b>Region:</b> ${data.region}`;
        capital.innerHTML = `<b>Capital:</b> ${data.capital}`;
        a.href = `paises.html`;

        //INSERTAR LOS DATOS EN EL HTML
        div.appendChild(imagen);
        div.appendChild(pais);
        div.appendChild(poblacion);
        div.appendChild(region);
        div.appendChild(capital);
        a.appendChild(div);
        divPaises.appendChild(a);
    });
}

/* menu desplegable */

main.addEventListener("click", (e) => {
    if(e.target.classList.contains("divFiltrador")) {
        menuDesplegable.classList.toggle("menuDesplegable"); 
    }
    
})

/* filtrar paises aprender
function filtrarContinentes(continentes) {
    divFiltrador.addEventListener("click", (e) => {
        if(e.target.classList.contains("africa")) {
            alert("puto")
        }
    })
}
*/