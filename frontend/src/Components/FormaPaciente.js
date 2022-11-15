import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";


const FormaPaciente = (props) => {
  const validationSchema = Yup.object().shape({
    rut_paciente: Yup.string().required("Required"),
    Name1_Pac: Yup.string().required("Required"),
    Apellidos_Pac: Yup.string().required("Required"),
    Fecha_Nacimiento: Yup.string().required("Required"),
    Sexo: Yup.string().required("Required"),
    Prevision: Yup.string().required("Required"),
    Telefono: Yup.string().required("Required"),
    Correo_pac: Yup.string()
        .email("You have enter an invalid email")
        .required("Required"),
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>

        <FormGroup className="mb-3">
            <label htmlFor="rut_paciente">Rut</label>
            <Field name="rut_paciente" type="int" className="form-control" placeholder="Ingresa el Rut sin puntos ni dijito verificador"/>
            <ErrorMessage name="rut_paciente" className="d-block invalid-feedback" component="span" />
          </FormGroup>
    
          <FormGroup className="mb-3">
            <label htmlFor="Name1_Pac">Nombre</label>
            <Field name="Name1_Pac" type="text" className="form-control" placeholder="Nombre/s"/>
            <ErrorMessage name="Name1_Pac" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup className="mb-3">
            <label htmlFor="Name2_Pac">Segundo Nombre</label>
            <Field name="Name2_Pac" type="text" className="form-control" placeholder="Nombre/s"/>
            <ErrorMessage name="Name1_Pac" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Apellidos_Pac">Apellidos</label>
            <Field name="Apellidos_Pac" type="text" className="form-control" placeholder="Apellido Paterno y Materno"/>
            <ErrorMessage name="Apellidos_Pac" className="d-block invalid-feedback" component="span" />
          </FormGroup >

          <FormGroup className="mb-3">
            <label htmlFor="Sexo">Sexo</label>
            <Field name="Sexo" type="text" className="form-control" placeholder="Mujer/Hombre/Otro"/>
            <ErrorMessage name="Sexo" className="d-block invalid-feedback" component="span" />
          </FormGroup >

          <FormGroup className="mb-3">
            <label htmlFor="Fecha_Nacimiento">Fecha de Nacimiento</label>
            <Field name="Fecha_Nacimiento" type="DATE" className="form-control" placeholder="DD/MM/YYYY"/>
            <ErrorMessage name="Fecha_Nacimiento" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Prevision">Previsión</label>
            <Field name="Prevision" type="text" className="form-control" placeholder="Ej: Fonasa"/>
            <ErrorMessage name="Prevision" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Telefono">Teléfono</label>
            <Field name="Telefono" type="int" className="form-control" placeholder="9 ** *** ***"/>
            <ErrorMessage name="Telefono" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Correo_pac">Correo Electronico</label>
            <Field name="Correo_pac" type="text" className="form-control" placeholder="ejemplo@correo.cl"/>
            <ErrorMessage name="Correo_pac" className="d-block invalid-feedback" component="span" />
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
  
export default FormaPaciente;