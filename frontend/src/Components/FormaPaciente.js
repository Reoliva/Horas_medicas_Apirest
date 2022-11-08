import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";


const FormaPaciente = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    Fecha_Nacimiento: Yup.string().required("Required"),
    email: Yup.string()
        .email("You have enter an invalid email Fecha_Nacimiento")
        .required("Required"),
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>

        <FormGroup className="mb-3">
            <label htmlFor="RUT">Rut</label>
            <Field name="RUT" type="int" className="form-control" placeholder="Ingresa el Rut sin puntos ni dijito verificador"/>
            <ErrorMessage name="RUT" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" className="form-control" placeholder="Nombre/s"/>
            <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="name">Apellidos</label>
            <Field name="Apellidos" type="text" className="form-control" placeholder="Apellido Paterno y Materno"/>
            <ErrorMessage name="Apellidos" className="d-block invalid-feedback" component="span" />
          </FormGroup >

          <FormGroup className="mb-3">
            <label> 
              Sexo: {"\n"}
              <input name="gender" type="radio" value="Hombre"/> Hombre 
              <input name="gender" type="radio" value="Mujer"/> Mujer 
            </label>
            <ErrorMessage name="gender" className="d-block invalid-feedback" component="span" />
          </FormGroup >

          <FormGroup className="mb-3">
            <label htmlFor="Fecha_Nacimiento">Fecha de Nacimiento</label>
            <Field name="Fecha_Nacimiento" type="DATE" className="form-control" placeholder="DD/MM/YYYY"/>
            <ErrorMessage name="Fecha_Nacimiento" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Previsión">Previsión</label>
            <Field name="Previsión" type="text" className="form-control" placeholder="Ej: Fonasa"/>
            <ErrorMessage name="Previsión" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="Telefono">Teléfono</label>
            <Field name="Telefono" type="int" className="form-control" placeholder="9 ** *** ***"/>
            <ErrorMessage name="Telefono" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup className="mb-3">
            <label htmlFor="email">Correo Electronico</label>
            <Field name="email" type="text" className="form-control" placeholder="ejemplo@correo.cl"/>
            <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
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