import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClientDataService from "../Services/pacientes.service";
  
const ClientTableRow = (props) => {
  const { id, rut_paciente, Name1_Pac, Name2_Pac, Apellidos_Pac, Sexo, Fecha_Nacimiento, Prevision, Telefono, Correo_pac } = props.obj;
  
  const deleteClient = () => {
    ClientDataService.remove(rut_paciente)
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
      <td>{rut_paciente}</td>
      <td>{Name1_Pac}</td>
      <td>{Name2_Pac}</td>
      <td>{Apellidos_Pac}</td>
      <td>{Sexo}</td>
      <td>{Fecha_Nacimiento}</td>
      <td>{Prevision}</td>
      <td>{Telefono}</td>
      <td>{Correo_pac}</td>
      <td>
        <Button onClick={deleteClient} 
          size="sm" variant="danger">
          Eliminar
        </Button>
      </td>
    </tr>
  );
};
  
export default ClientTableRow;