import { servicioProductos } from "./services/products-services.js";

const productoContainer = document.querySelector("[data-product]");

function constroiCard(name, price, image, id) {
    const imagem = document.createElement("div");
    image.className = "container";
    image.innerHTML = `
    <div data-product class="container">
        <img src="${image}" alt="" class="imagen_producto">
                    <p class="Descripcion">${name}</p>
                    <div class="container_valor">
                        <h3 class="valor">${price}</h2>
                        <button class="boton-eliminar" data-id="${id}">
<img src="img/borrar.png" alt="papelera" class="papelera">
    `

    productoContainer.appendChild(imagem)
    return imagem;
}

async function listaProducto() {
    try {
        const lista = await servicioProductos.listaProductos();
        lista.forEach(producto => {
            const {name, price, image, id} = producto;
            const productos = constroiCard(name, price, image, id);
            productos.appenChild(productos)
        });
    } catch (error) {
        console.log(error);
    }
}

listaProducto();




