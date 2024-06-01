import { servicioProductos } from "./services/products-services.js";

const productoContainer = document.querySelector("[data-product]")

function createElement(name, price, image, id){
    const crear = document.createElement("div");
    crear.classList.add("imagen_producto");

    crear.innerHTML = `
    <img src="${image}" alt="" class="imagen_producto">
                    <p class="Descripcion">${name}</p>
                    <div class="container_valor">
                        <h3 class="valor">${price}</h2>
                        <button class="boton-eliminar" data-id="${id}">
<img src="img/borrar.png" alt="papelera" class="papelera">
    `

    productoContainer.appendChild(crear);
    return crear;
}

const render = async () => {
    try {
        const productosLista = await servicioProductos.listaProductos();
        productosLista.forEach(producto => {
            productoContainer.appendChild(
                createElement(producto.name, producto.price, producto.image, producto.id))
        });
    }catch (error) {
        console.log(error);

    }
}

render()











