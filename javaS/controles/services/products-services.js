async function listaProductos () {
    const coneccion = await fetch("http://localhost:3000/products")
    const coneccionConvertida = await coneccion;

    return coneccionConvertida;
};

const crearProducto = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "contenr-type": "aplication/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}


export const servicioProductos = {
    listaProductos,
    crearProducto,
}