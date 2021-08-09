import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PhoneInput from "react-phone-input-2";
import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

import { RiContactsLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import "./Form.module.css";
import { getContacts } from "../../redux/contacts/contactsSelector";
import contactsActions from "../../redux/contacts/contactsAction";
import s from "./Form.module.css";

export default function MyForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(contactsActions.addContact(name, number));

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contactMatching = () => {
    const namesInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      []
    );

    const numbersInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      []
    );

    if (
      namesInPhonebook.includes(name) ||
      numbersInPhonebook.includes(number)
    ) {
      alert(`${name}${number} is already in contacts`);
      return true;
    }

    if (name === "" || number === "") {
      alert("Please enter all data");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setNumber("");

    if (contactMatching()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Elon Mask'
          onChange={(e) => setName(e.currentTarget.value)}
          className={s.input}
        />
      </label>
      <label>
        Number
        <PhoneInput
          country={"us"}
          value={number}
          placeholder='10664888778'
          onChange={setNumber}
        />
      </label>
      <div className={s.buttonWrapper}>
        <button type='submit' className={s.button}>
          Add contact
        </button>
      </div>
    </form>
  );
}

// function MyForm() {
//   const dispatch = useDispatch();
//   return (
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.name) {
//           errors.name = "Enter name";
//         } else if (!values.number) {
//           errors.number = "Enter number";
//         } else if (
//           !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
//             values.number
//           )
//         ) {
//           errors.number =
//             "The number can only include numbers, spaces, dashes, brackets and start with +";
//         }
//         return errors;
//       }}
//       onSubmit={(values, { resetForm }) => {
//         dispatch(contactsActions.addContact());
//         resetForm();
//       }}
//     >
//       <Form autoComplete='off'>
//         <label htmlFor='name'>
//           <RiContactsLine color='#c21111e2'></RiContactsLine> Name
//         </label>
//         <Field type='name' name='name' placeholder='enter name' />
//         <ErrorMessage name='name' />

//         <label htmlFor='number'>
//           <BsPhone color='#c21111e2'></BsPhone>Number
//         </label>
//         <Field type='tel' name='number' placeholder='+111-111-11' />
//         <ErrorMessage name='number' />

//         <button type='submit'>Add contact</button>
//       </Form>
//     </Formik>
//   );
// }

// export default MyForm;
