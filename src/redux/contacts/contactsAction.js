import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/add");
const deleteContact = createAction("phonebook/delete");
const getFiltered = createAction("filter/get");

export { addContact, deleteContact, getFiltered };
