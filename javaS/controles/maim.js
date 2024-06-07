import { servicioProductos } from "./services/products-services.js";

const productoContainer = document.querySelector("[data-product]");

function constroiCard(name, price, image, id) {
    const imagem = document.createElement("div");
    imagem.className = "container_producto";
    imagem.innerHTML = `
        <img src="${image}" alt="" class="imagen_producto">
        <p class="Descripcion">${name}</p>
        <div class="container_valor">
            <h3 class="valor">${price}</h2>
            <button class="boton-eliminar" data-id="${id}">
            <img src="img/borrar.png" alt="papelera" class="papelera">
        </div>
    `;

    return imagem;
}

async function listaProducto() {
    try {
        const lista = await servicioProductos.listaProductos();
        console.log(lista);
        lista.forEach(producto => {
            const {name, price, image, id} = producto;
            console.log(name);
            console.log(price);
            console.log(image);
            console.log(id);
            const productos = constroiCard(name, price, image, id);
            productoContainer.appendChild(productos);
        });
    } catch (error) {
        console.log(error);
    }
}

listaProducto();