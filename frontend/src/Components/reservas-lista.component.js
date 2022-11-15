import React, { useState, useEffect } from "react";
import ClientDataService from "../Services/reserva.service";
import { Table } from "react-bootstrap";
import ReservaTableRow from "./ReservaTableRow";
  
const ListaReservas = () => {
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
      return <ReservaTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        
        <thead>
          <tr>
            <th>Numero_reserva</th>
            <th>Rut_Medico</th>
            <th>Rut_Paciente</th>
            <th>Sexo</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default ListaReservas;