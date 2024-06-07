async function listaProductos () {
    const coneccion = await fetch("http://localhost:3000/products");
    const coneccionConvertida = await coneccion.json();

    return coneccionConvertida;
};

async function crearProducto(name, price, image) {
    const coneccion = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "aplication/json",
        },
        body: JSON.stringify({
            name: name,
            price: price,
            image: image,
        })
    })


    const coneccionConvertida = await coneccion.json();
    return coneccionConvertida;
}

async function eliminarProducto(productoId) {
    try {
        const response = await fetch(`http://localhost:3000/products/${productoId}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new error (`Error al eliminar el produto: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('No se pudo excluir el producto', error);
        throw error;
        
    }
}


export const servicioProductos = {
    listaProductos,
    crearProducto,
    eliminarProducto,
}