async function listaProductos () {
    const coneccion = await fetch("http://localhost:3000/products")
    const coneccionConvertida = await coneccion;

    return coneccionConvertida;
};

async function crearProducto(name, price, image) {
    const coneccion = fetch("http://localhost:3000/products", {
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

    const coneccionConvertida = coneccion.json();
    return coneccionConvertida;
}


export const servicioProductos = {
    listaProductos,
    crearProducto,
}