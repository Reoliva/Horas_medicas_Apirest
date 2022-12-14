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
            <th>Rut Paciente</th>
            <th>Nombre</th>
            <th>Segundo Nombre</th>
            <th>Apellido</th>
            <th>Sexo</th>
            <th>Fecha de Nacimiento</th>
            <th>Prevision</th>
            <th>Telefono</th>
            <th>Correo paciente</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default ListaPacientes;