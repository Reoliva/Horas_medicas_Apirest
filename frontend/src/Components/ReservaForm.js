import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";


const ReservaForm = (props) => {
  const validationSchema = Yup.object().shape({
    Numero_reserva: Yup.string().required("Required"),
    Rut_Medico: Yup.string().required("Required"),
    Rut_Paciente: Yup.string().required("Required"),
    Sexo: Yup.string().required("Required"),
    Fecha: Yup.string().required("Required"),
    Hora: Yup.string().required("Required")


 
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>

        <FormGroup className="mb-3">
            <label htmlFor="Numero_reserva">Numero de reserva</label>
            <Field name="Numero_reserva" type="int" className="form-control" placeholder="Ingrese numero de reserva"/>
            <ErrorMessage name="Numero_reserva" className="d-block invalid-feedback" component="span" />
          </FormGroup>
    
          <FormGroup className="mb-3">
            <label htmlFor="Rut_Medico">Rut Medico</label>
            <Field name="Rut_Medico" type="text" className="form-control" placeholder="Rut medico"/>
            <ErrorMessage name="Rut_Medico" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Rut_Paciente">Rut Paciente</label>
            <Field name="Rut_Paciente" type="text" className="form-control" placeholder="Rut Paciente"/>
            <ErrorMessage name="Rut_Paciente" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Sexo">Sexo</label>
            <Field name="Sexo" type="text" className="form-control" placeholder="Mujer/Hombre/Otro"/>
            <ErrorMessage name="Sexo" className="d-block invalid-feedback" component="span" />
          </FormGroup >

          <FormGroup className="mb-3">
            <label htmlFor="Fecha">Fecha</label>
            <Field name="Fecha" type="DATE" className="form-control" placeholder="DD/MM/YYYY"/>
            <ErrorMessage name="Fecha" className="d-block invalid-feedback" component="span" />
          </FormGroup >

          <FormGroup className="mb-3">
            <label htmlFor="Hora">Hora</label>
            <Field name="Hora" type="TIME" className="form-control" placeholder="Hora"/>
            <ErrorMessage name="Hora" className="d-block invalid-feedback" component="span" />
          </FormGroup >

          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default ReservaForm;