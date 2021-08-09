import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contactsSelector";
import contactsActions from "../../redux/contacts/contactsAction";
import { RiPhoneFindLine } from "react-icons/ri";
import { FilterContainer, Input, FilterTitle } from "./Filter.styled";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(contactsActions.setFilter(e.target.value));

  return (
    <FilterContainer>
      <FilterTitle>
        <RiPhoneFindLine color='#c21111e2'></RiPhoneFindLine>
        Find contacts by name
      </FilterTitle>
      <Input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='enter name'
      />
    </FilterContainer>
  );
}
