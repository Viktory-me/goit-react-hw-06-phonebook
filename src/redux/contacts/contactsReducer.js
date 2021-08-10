import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, getFiltered } from "./contactsAction";

const contactsInitial = [
  { id: "11", name: "Mike Wazowski", number: "22445566778" },
  { id: "22", name: "James P. “Sulley” Sullivan", number: "55664411229" },
  { id: "23", name: "Randall “Randy” Boggs", number: "88999124562" },
];

const contacts = createReducer(contactsInitial, {
  [addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [payload, ...state],

  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [getFiltered]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
