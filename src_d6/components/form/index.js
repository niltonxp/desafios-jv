import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";

const MyTextInput = ({ label, formikContext, name, ...props }) => {
  const {values, errors, touched, handleChange} = formikContext
  return (
    <>
      <label className="label-input" htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" name={name} value={values[name]} {...props} onChange={handleChange} />
      {touched && errors[name] ? (
        <div className="error">{errors[name]}</div>
      ) : null}
    </>
  );
};

// And now we can use these
const FormUser = (props) => {
  const formik = useFormik({
    initialValues:{
      firstname: "",
      lastname: "",
    },
    validationSchema:Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Firstname is required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Lastname is required"),
    }),
    onSubmit:(values) => {
      //alert(JSON.stringify(values))
      handleSuccess(values);
      formik.resetForm()
    }
  })
  function handleSuccess(values) {
    props.handleFormSubmit(values);
  }

  return (
    <>
        <form onSubmit={formik.handleSubmit}>
          <MyTextInput
            label="First Name"
            name="firstname"
            type="text"
            formikContext={formik}
          />
          <MyTextInput
            label="Last Name"
            name="lastname"
            type="text"
            formikContext={formik}
          />
          <button type="submit">Submit</button>
        </form>
    </>
  );
};

export default FormUser;