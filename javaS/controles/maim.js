import { servicioProductos } from "./services/products-services.js";

const productoContainer = document.querySelector("[data-product]")
const form = document.querySelector("[data-form]")

function createElement(name, price, image, id){
    const crear = document.createElement("div");
    crear.classList.add("container");

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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicioProductos.crearProducto(nome, price, image)
    .then((res) => console.log(res)).catch((err) => console.log(err))
    
})

render()











