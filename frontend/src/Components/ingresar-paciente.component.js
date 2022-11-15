// Import Modules
import React, { useState } from "react";
import ClientDataService from "../Services/pacientes.service";
import FormaPacientes from "./FormaPaciente";
  
const IngresarPaciente = () => {
  const [formValues] = useState({ rut_paciente: '',  Name1_Pac: '', Name2_Pac: '',Apellidos_Pac:'', Sexo: '', Fecha_Nacimiento: '', Prevision: '', Telefono: '', Correo_pac: '' })
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