// Import Modules
import React, { useState, useEffect } from "react";
import ClientDataService from "../Services/pacientes.service";
import ClientForm from "./FormaPaciente";

const EditClient = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    email: "",
  });
    
  //onSubmit handler
  const onSubmit = (ClientObject) => {
    ClientDataService
      .put("http://localhost:8080/api/client/" + props.match.params.id, ClientObject )
      .then((res) => {
        if (res.status === 200) {
          alert("Client successfully updated");
          props.history.push("/client-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize client form
  useEffect(() => {
    ClientDataService.get(props.match.params.id)
      .then((res) => {
        const { rut_paciente, Name1_Pac, Apellidos_Pac, Sexo, Fecha_Nacimiento, Prevision, Telefono, Correo_pac } = res.data;
        setFormValues({ rut_paciente, Name1_Pac, Apellidos_Pac, Sexo, Fecha_Nacimiento, Prevision, Telefono, Correo_pac });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return client form
  return (
    <ClientForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Client
    </ClientForm>
  );
};
  
// Export EditClient Component
export default EditClient;