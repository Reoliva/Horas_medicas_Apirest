import React, { useState, useEffect } from "react";
import ClientDataService from "../Services/pacientes.service";
import { Table } from "react-bootstrap";
import ClientTableRow from "./ClientTableRow";
  
const ListaPacientes = () => {
  const [client, setClient] = useState([]);
  
  useEffect(() => {
    ClientDataService.getAll()
      .then(({ data }) => {
        setClient(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return client.map((res, i) => {
      return <ClientTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name1_Pac</th>
            <th>Name2_Pac</th>
            <th>Apellidos_Pac</th>
            <th>Sexo</th>
            <th>Fecha_Nacimiento</th>
            <th>Prevision</th>
            <th>Telefono</th>
            <th>Correo_pac</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default ListaPacientes;