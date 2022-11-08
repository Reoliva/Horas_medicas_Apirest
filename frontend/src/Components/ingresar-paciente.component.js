// Import Modules
import React, { useState, useEffect } from "react";
import ClientDataService from "../Services/pacientes.service";
import FormaPacientes from "./FormaPaciente";
  
const IngresarPaciente = () => {
  const [formValues, setFormValues] = useState({ Nombre: '', Dirección: '', email: '' })
  const onSubmit = clientObject => {
    ClientDataService.create(clientObject)
      .then(res => {
        if (res.status === 200)
          alert('Paciente ingresado Correctamente.')
        else
          Promise.reject()
      })
      .catch(err => alert('Oops, algo salió mal'))
  }
    
  // Return client form
  return(
    <FormaPacientes initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Ingresar Paciente
    </FormaPacientes>
  )
}
  
// Export IngresarPaciente Component
export default IngresarPaciente