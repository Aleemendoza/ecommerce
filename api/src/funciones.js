

function eliminarObjetosDuplicados(arr, prop) {
    var nuevoArray = [];
    var lookup  = {};
    for (var i in arr) {
        lookup[arr[i][prop]] = arr[i];
    }
    for (i in lookup) {
        nuevoArray.push(lookup[i]);
    }
    return nuevoArray;
}
// var duplicadosEliminados = eliminarObjetosDuplicados(carrito, 'id');

// var arrayId = duplicadosEliminados.map(producto => ( producto.id))

function contarProductosEnCarritoDeId(array, id){
  var contador=0
    for (var i = 0 ; i < array.length; i++) {
      if (array[i].id === id){
        contador = contador +1;
    }
    }
    return contador
}


function cantidadProduct (){
  var cantidad = 0
for (let i = 0; i < arrayId.length; i++) {
   cantidad = contarProductosEnCarritoDeId(carrito, arrayId[i])

}
}

function sumarPreciosPorId(array, id){
  var subtotal=0
    for (var i = 0 ; i < array.length; i++) {
      if (array[i].id === id){
        subtotal = subtotal + array[i].price
    }
    }
    return subtotal
}

module.exports={
    eliminarObjetosDuplicados,
    contarProductosEnCarritoDeId, 
    sumarPreciosPorId

}