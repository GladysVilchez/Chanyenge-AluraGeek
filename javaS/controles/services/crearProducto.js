import { servicioProductos } from "./products-services.js";

const formulario = document.querySelector("[data-formulario]");

async function agregarProducto(evento) {
    evento.preventDefault()
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
   
    try {
        await servicioProductos.crearProducto(name, price, image);
        alert('Video enviado con suceso')
    } catch (erro) {
        alert('Erro ao enviaar o vÃdeo. Tente novamente.')
    }
   
}

formulario.addEventListener("submit", evento => agregarProducto(evento));