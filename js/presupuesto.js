async function fetchJSON1() {
  const response = await fetch("http://localhost:8080/presupuesto");
  const jsonResponse = await response.json();
  return jsonResponse;
}
fetchJSON1().then((json) => {
  console.log(json); // objeto al completo [{}, {}, {}]
  for (const element of json) {
    console.log(element); //{}
    const tableTbody1 = document.getElementById("tableTbody1");
    const tableRow = (document.createElement("tr").innerHTML = `
          <tr>
                  <th>${element.idUsuario}</th>
                  <th>${element.idProducto}</th>
                  <th>${element.descripcion}</th>
                  <th>${element.costoUnitario}</th>
                  <th>${element.cantidad}</th>
                  <th>${element.costoTotal}</th>
                 
          </tr>
        `);
    //console.log(tableRow);
    tableTbody1.innerHTML += tableRow;
  }
});
