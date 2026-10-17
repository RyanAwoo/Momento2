const listaReservas = [
    { cliente: "Andres Gomez", placa: "XYZ45A", servicio: "Lavado basico" },
    { cliente: "Laura Restrepo", placa: "KLM78B", servicio: "Detailing" },
    { cliente: "Mateo Salazar", placa: "QWE12C", servicio: "Polichado" }
];

let section = document.querySelector("#section-principal");
let btnAgregar = document.querySelector("#btn-agregar");
let btnBuscar = document.querySelector("#btn-buscar");
let btnTodas = document.querySelector("#btn-todas");

btnAgregar.addEventListener('click', () => {
    let inputCliente = document.querySelector("#nameCliente");
    let inputPlaca = document.querySelector("#placaMoto");
    let selectServicio = document.querySelector("#tipoServicio");

    if (inputCliente.value === "" || inputPlaca.value === "" || selectServicio.value === "") {
        section.textContent = "Debe llenar todos los campos";
    } else {
        let nuevaReserva = {
            cliente: inputCliente.value,
            placa: inputPlaca.value,
            servicio: selectServicio.value
        };
        listaReservas.push(nuevaReserva);
        inputCliente.value = "";
        inputPlaca.value = "";
        selectServicio.value = "";
        imprimir(listaReservas);
    }
});

btnBuscar.addEventListener('click', () => {
    let inputBuscar = document.querySelector("#nameBuscar");
    let listaFiltrada = listaReservas.filter(r => r.cliente === inputBuscar.value);
    imprimir(listaFiltrada);
});

btnTodas.addEventListener('click', () => {
    imprimir(listaReservas);
});

function imprimir(lista) {
    section.innerHTML = "";
    lista.forEach((reserva) => {
        const itemP = document.createElement("p"); // 1. Creamos
        itemP.textContent = reserva.cliente + " - " + reserva.placa + " - " + reserva.servicio; // Actualizamos
        section.appendChild(itemP); // inyectamos
    })
}