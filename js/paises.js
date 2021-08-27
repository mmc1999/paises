let divPaises = document.querySelector(".divImagenPais");
let divDark = document.querySelector(".divDark");
let diverror = document.querySelector(".divError");
let paisesLimitrofes = document.querySelector(".paisesLimitrofes")
let mensajeError = document.querySelector(".mensajeError");
let divFiltrador = document.querySelector(".divFiltrador");

const query1 = new URLSearchParams(window.location.search),
    params = query1.get("name");

const traerDatos = async () => {
    try {
        let response = await fetch("https://restcountries.eu/rest/v2/all");
        let data = await response.json();
        const filtrarData = data.filter(item => item.name === params)
        mostrarDatos(filtrarData);
    } catch (error) {
        diverror.style.display = "block";
        mensajeError.innerHTML = error;
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded", traerDatos);

function mostrarDatos(datos) {
    let elementos = '';
    let paisLimitrofe = "";
    datos.forEach((data, i) => {
        //DECLARACION DE VARIABLES

        elementos += `
                        <div class="divImagen">
                            <img src="${data.flag}" alt="Bandera de ${data.name}" class="claseParaLaImagen">
                        </div>
                        <div class="claseParaLosP">
                            <div>
                                <h3>${data.name}</h3>
                                <p>
                                    <b>Native Name: </b>
                                    ${data.nativeName}
                                </p>
                                <p>
                                    <b>Population: </b>
                                    ${data.population}
                                </p>
                                <p>
                                    <b>Region: </b>
                                    ${data.region}
                                </p>
                                <p>
                                    <b>Sub Region: </b>
                                    ${data.subregion}
                                </p>
                                <p>
                                    <b>Capital: </b>
                                    ${data.capital}
                                </p>
                            </div>
                            <br>
                            <div class="agregado">
                                <p>
                                    <b>Top level domain: </b>
                                    ${data.topLevelDomain}
                                </p>
                                <p>
                                    <b>Currencies: </b>
                                    ${data.currencies[0].name}
                                </p>
                                <p>
                                    <b>Languages: </b>
                                    ${data.languages[0].name}
                                </p>
                            </div>
                            
                </div>`;
        for (let i = 0; i < data.borders.length; i++) {
            let span = document.createElement("button");
            paisLimitrofe += `<a href="#">${span}</a>`;
            paisesLimitrofes.appendChild(span);
            span.classList.add("paisLimitrofe");
            span.textContent = data.borders[i];
        }
    }) //TERMINA EL ARRAY
    divPaises.insertAdjacentHTML("afterbegin", elementos);
} //TERMINA LA FUNCION 



console.log(document.querySelector(".paisLimitrofe"));