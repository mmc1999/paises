let main = document.getElementById("main");
let diverror = document.querySelector(".divError");
let mensajeError = document.querySelector(".mensajeError");
let divFiltrador = document.querySelector(".divFiltrador");
let menuDesplegable = document.querySelector(".menuDesplegable");
let banderas = document.querySelector(".divPaises");
let divDark = document.querySelector(".divDark");
let $input = document.querySelector(".input");
let $claseParaLosP = document.querySelector(".claseParaLosP")



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

document.addEventListener("DOMContentLoaded", traerDatos);

/*banderas.innerHTML = `<img class="loader" src="/hearts.svg" alt="CARGANDO...">`;  ICONO DE CARGA */
function mostrarDatos(datos) {
    let elementos = '';
    datos.forEach(data => {
        //DECLARACION DE VARIABLES
        elementos += `
                <div class="claseParaEldiv  ${data.region}">
                    <a href="paises.html?name=${data.name}" class="enlaceImagen">
                        <img src="${data.flag}" alt="Bandera ${data.name}" class="claseParaLaImagen">
                    </a>
                        <div class="claseParaLosP">
                            <h3>${data.name}</h3>
                            <p>
                                <b>Population: </b>
                                ${data.population}
                            </p>
                            <p>
                                <b>Region: </b>
                                ${data.region}
                            </p>
                            <p>
                                <b>Capital: </b>
                                ${data.capital}
                            </p>
                    </div>
                </div>
            `;
    }) //TERMINA EL ARRAY
    

    banderas.innerHTML = elementos;
} //TERMINA LA FUNCION



//ESTO NO HAY QUE HACERLO TARDABA COMO 5 SEGUNDOS EN CARGAR Y ES MALISIMO, YA LA DIF DE CODIGO ES ABISMAL

/*let a = document.createElement("a");
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
divPaises.appendChild(a);*/



/* menu desplegable */

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("divFiltrador")) {
        menuDesplegable.classList.toggle("menuDesplegable");
    } 
})
/* MODO DARK */

divDark.addEventListener('click', (e) => {
    document.body.classList.toggle("modoDark")
    main.classList.toggle("modoDark")
    $claseParaLosP.classList.add("modoDark")
    if(document.querySelector(".parrafoDark").textContent == "🌙 Dark mode") {
        document.querySelector(".parrafoDark").textContent = "☀️ ligth Mode"; 
    }else {
        document.querySelector(".parrafoDark").textContent = "🌙 Dark mode" 
    }
})


document.addEventListener("keyup", (e) => {
    if (e.target.matches("input")) {
        if (e.target === "escape") e.target.value = "";

        document.querySelectorAll(".claseParaEldiv").forEach(el =>
            el.textContent.toLowerCase().includes(e.target.value) 
            ? el.classList.remove("filter") 
            : el.classList.add("filter")
        )
    }
})


menuDesplegable.addEventListener("click", e => {
    document.querySelectorAll(".claseParaEldiv").forEach(el => {
        if (e.target.matches(".africa")) {
            el.classList.contains("Africa") ? el.classList.remove("filter") : el.classList.add("filter")
        } else if (e.target.matches(".europa")) {
            el.classList.contains("Europe") ? el.classList.remove("filter") : el.classList.add("filter")
        } else if (e.target.matches(".america")) {
            el.classList.contains("Americas") ? el.classList.remove("filter") : el.classList.add("filter")
        } else if (e.target.matches(".asia")) {
            el.classList.contains("Asia") ? el.classList.remove("filter") : el.classList.add("filter")
        } else if (e.target.matches(".oceania")) {
            el.classList.contains("Oceania") ? el.classList.remove("filter") : el.classList.add("filter")
        } else if (e.target.matches(".antartida")) {
            el.classList.contains("Polar") ? el.classList.remove("filter") : el.classList.add("filter")
        } else {
            el.classList.remove("filter")
        }

    })
})