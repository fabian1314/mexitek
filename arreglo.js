const cotizacion = [];

function crearTabla() {
    const n = document.getElementById("numItems").value;
    const tbody = document.querySelector("#tabla tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < n; i++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="text" class="producto" placeholder="Ej. Cambio de batería" /></td>
            <td><input type="number" class="precio" placeholder="$" oninput="calcularTotal()" /></td>
            <td><input type="number" class="cantidad" placeholder="1" oninput="calcularTotal()" /></td>
            <td class="total">0.00</td>
        `;

        tbody.appendChild(row);
    }
}

function calcularTotal() {
    let totalGeneral = 0;
    const rows = document.querySelectorAll("#tabla tbody tr");

    rows.forEach(row => {
        const precio = parseFloat(row.querySelector(".precio").value) || 0;
        const cantidad = parseFloat(row.querySelector(".cantidad").value) || 0;
        const total = precio * cantidad;
        row.querySelector(".total").innerText = total.toFixed(2);
        totalGeneral += total;
    });

    document.getElementById("totalGeneral").innerText = totalGeneral.toFixed(2);
}

function guardarArreglo() {
    cotizacion.length = 0;
    const rows = document.querySelectorAll("#tabla tbody tr");
    let resumen = "<strong>Resumen de Cotización:</strong><br><ul>";

    rows.forEach(row => {
        const producto = row.querySelector(".producto").value.trim();
        const precio = parseFloat(row.querySelector(".precio").value) || 0;
        const cantidad = parseFloat(row.querySelector(".cantidad").value) || 0;
        const total = precio * cantidad;

        if (producto !== "") {
            cotizacion.push({ producto, precio, cantidad, total });
            resumen += `<li>${producto} - $${precio} x ${cantidad} = <strong>$${total.toFixed(2)}</strong></li>`;
        }
    });

    resumen += "</ul>";
    document.getElementById("resultado").innerHTML = resumen;
}
