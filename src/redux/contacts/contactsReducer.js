import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsAction";

const initialStateContacts = [
  { id: "11", name: "Mike Wazowski", number: "22445566778" },
  { id: "22", name: "James P. “Sulley” Sullivan", number: "55664411229" },
  { id: "23", name: "Randall “Randy” Boggs", number: "88999124562" },
];

const items = createReducer(initialStateContacts, {
  [contactsActions.addContact]: (state, { payload }) =>
    // state.filter(({ contact }) => contact.name === payload.name)
    //   ? alert(`Contact ${payload.name} already exists`)
    //   :
    [payload, ...state],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [contactsActions.setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
