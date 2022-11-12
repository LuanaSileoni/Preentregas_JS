const arrayProductos = [];

const producto1 = new Producto(1, 'LIBRO 1', 1000);
const producto2 = new Producto(2, 'LIBRO 2', 1500);
const producto3 = new Producto(3, 'LIBRO 3', 1560);
const producto4 = new Producto(1, 'LIBRO 4', 2600);
const producto5 = new Producto(2, 'LIBRO 5', 3000);
const producto6 = new Producto(3, 'LIBRO 6', 7800);

arrayProductos.push(producto1, producto2, producto3, producto4, producto5, producto6);

// Función para ordenar precio de menor a mayor
const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

// Función para ordenar precio de mayor a menor
const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));
};


function comprarProductos() {
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt('¿Queres comprar LIBRO 1, LIBRO 2, LIBRO 3, LIBRO 4, LIBRO 5, LIBRO 6?', 'Ej: LIBRO 2');
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?')); 

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert('El producto no se encuentra en stock.');
        }

        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)

    aplicarDescuento(total);
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 7000) {
        totalCompra = totalCompra * 0.80;
        alert('Tenes un 20% de descuento!');
    }
    calcularEnvio(totalCompra)
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Queres envio a domicilio?');

    if (tieneEnvioADomicilio && totalCompra >= 2000) {
        alert('Tenes envio gratis. El total de la compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('El envío cuesta $700. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de la compra es: '+totalCompra);
    }
};

function comprar() {
    const quieroOrdenar =confirm('¿Querés ordenar la lista de productos del más barato al más caro?');
    if (quieroOrdenar) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }

    comprarProductos();
};

comprar();

