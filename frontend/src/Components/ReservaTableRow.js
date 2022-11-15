import React from "react";
import { Button } from "react-bootstrap";
import ClientDataService from "../Services/reserva.service";
  
const ReservaTableRow = (props) => {
  const {  Numero_reserva, Rut_Medico, Rut_Paciente, Sexo, Fecha, Hora } = props.obj;
  
  const deleteClient = () => {
    ClientDataService.remove(Numero_reserva)
      .then((res) => {
        if (res.status === 200) {
          alert("Client successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{Numero_reserva}</td>
      <td>{Rut_Medico}</td>
      <td>{Rut_Paciente}</td>
      <td>{Sexo}</td>
      <td>{Fecha}</td>
      <td>{Hora}</td>
      <td>
        <Button onClick={deleteClient} 
          size="sm" variant="danger">
          Eliminar
        </Button>
      </td>
    </tr>
  );
};
  
export default ReservaTableRow;