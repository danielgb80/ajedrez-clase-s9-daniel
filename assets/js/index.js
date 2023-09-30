console.log("Entro index.js");
console.log(piezas);


const inputBusqueda = document.getElementById("inputBusqueda");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");
const imgPieza = document.getElementById("imgPieza");

function buscar() {
    console.log("Entro a función buscar");
    const txtBusqueda = inputBusqueda.value;
    let resultado = piezas.find((pieza) => {
        return pieza.nombre.toLocaleLowerCase() == txtBusqueda.toLocaleLowerCase();
    });
    //donde esta la imagen??
    if (resultado == undefined) {
        alert("No se encontro la pieza");
        imgPieza.src = "assets/images/piezas/logo.png";
        resultadoBusqueda.innerText = "No se encontro la pieza";
    } else {
        //aquí sí debería tener la pieza
        imgPieza.src = resultado.imagen;
        //resultadoBusqueda.innerHTML = resultado.movimiento;
        resultadoBusqueda.innerHTML = resultado.movimiento;
    }
    console.log(resultado, "resultado");
}
inputBusqueda.addEventListener("keypress", (event) => {
console.log(event);
if (event.key === "Enter"){
    console.log("Entro a evento keypress con enter");
    buscar();
}
});