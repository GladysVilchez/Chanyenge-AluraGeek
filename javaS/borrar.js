import { servicioProductos } from "./controles/services/products-services.js";

const borrar = document.querySelectorAll("[data-delete.producto]");
borrar.forEach((button) => {
  button.addEventListener("click", (event) => {
      const productId = event.target.dataset.borrar;
      const productElement = document.querySelector(`.container[data-delete-product="${productId}"]`)
      borrar(productElement);
  })
})

async function borrar(productId) {
  try {
      const productId = productElement.dataset.borrar;
      await servicioProductos.eliminarProducto(productId);
      alert("El producto a sido borrado de la lista.");
      productElement.remove();

       
  } catch (error) {
      console.log("ocurrio un error al borrar el producto. Por favor intente mas tarde")
  }
}