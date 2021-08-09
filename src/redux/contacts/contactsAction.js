import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const contactsActions = {
  addContact: createAction("contacts/add", (name, number) => ({
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  })),
  deleteContact: createAction("contacts/delete"),
  setFilter: createAction("contacts/setFilter"),
};

export default contactsActions;
