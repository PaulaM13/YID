//
async function fetchJSON3() {
  const response = await fetch("http://localhost:8080/usuarios");
  const jsonResponse = await response.json();
  return jsonResponse;
}
fetchJSON3().then((json) => {
  console.log(json); // objeto al completo [{}, {}, {}]
  for (const element of json) {
    console.log(element); //{}
    console.log(`${element.idUsuario}`);
    const tr = (document.createElement("tr").innerHTML = `

        <tr>
                <th>id</th>
                <th>${element.nombre}</th>
                <th>${element.apellido}</th>
                <th>${element.correoElectronico}</th>
                <th>${element.constrasenya}</th>
                <th>${element.fechaBoda}</th>
    
                <th></th>
        </tr>
      `);
    const tableTbody = document.getElementById("tableTbody");
    const row =
      "<tr>" +
      "<td>" +
      element.idUsuario +
      "</td>" +
      "<td>" +
      element.nombre +
      "</td>" +
      "<td>" +
      element.apellido +
      "</td>" +
      "<td>" +
      element.correoElectronico +
      "</td>" +
      "<td>" +
      element.constrasenya +
      "</td>" +
      "<td>" +
      element.fechaBoda +
      "</td>" +
      "<tr>";
    tableTbody.innerHTML += row;
    // tableTbody.innerHTML = '<tr>';
    //          tableTbody.innerHTML += '<td>' + element.idUsuario + '</td>';
    //          tableTbody.innerHTML += '<td>' + element.nombre + '</td>';
    // tableTbody.innerHTML += '</tr>';
  }
});
