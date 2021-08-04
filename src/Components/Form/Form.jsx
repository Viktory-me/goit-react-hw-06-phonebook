import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RiContactsLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import "./Form.module.css";

function MyForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Enter name";
        } else if (!values.number) {
          errors.number = "Enter number";
        } else if (
          !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
            values.number
          )
        ) {
          errors.number =
            "The number can only include numbers, spaces, dashes, brackets and start with +";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // console.log(values);
        onSubmit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form autoComplete='off'>
        <label htmlFor='name'>
          <RiContactsLine color='#c21111e2'></RiContactsLine> Name
        </label>
        <Field type='name' name='name' placeholder='enter name' />
        <ErrorMessage name='name' />

        <label htmlFor='number'>
          <BsPhone color='#c21111e2'></BsPhone>Number
        </label>
        <Field type='tel' name='number' placeholder='+111-111-11' />
        <ErrorMessage name='number' />

        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
}

export default MyForm;
