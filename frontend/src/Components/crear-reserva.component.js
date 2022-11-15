// Import Modules
import React, { useState} from "react";
import ClientDataService from "../Services/reserva.service";
import ReservaForm from "./ReservaForm";
  
const CrearReserva = () => {
  const [formValues] = useState({Numero_reserva: '', Rut_Medico: '', Rut_Paciente: '', Sexo: '', Fecha: '', Hora: ''})
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
    <ReservaForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Crear Reserva
    </ReservaForm>
  )
}
  
// Export CrearReserva Component
export default CrearReserva


