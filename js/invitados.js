async function fetchJSON4() {
  const response = await fetch("http://localhost:8080/invitados");
  const jsonResponse = await response.json();
  return jsonResponse;
}
fetchJSON4().then((json) => {
  console.log(json); // objeto al completo [{}, {}, {}]
  for (const element of json) {
    console.log(element); //{}
    //console.log(`${element.idUsuario}`);
    const tableTbody4 = document.getElementById("tableTbody4");
    const tableRow = (document.createElement("tr").innerHTML = `
      
    
            <tr>
                    <th>${element.idInvitado}</th>
                    <th>${element.nombreInvitado}</th>
                    <th>${element.apellidoInvitado}</th>
                    <th>${element.correoElectronico}</th>
                    <th>${element.cantInvitacion}</th>
                    <th>${element.nroMenu}</th>
                    <th>${element.necesidadEspecial}</th>
                        </tr>
          `);
    tableTbody4.innerHTML += tableRow;
  }
});
