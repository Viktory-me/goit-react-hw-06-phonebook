import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getFiltered } from "../../redux/contacts/contactsAction";
import { RiPhoneFindLine } from "react-icons/ri";
import { FilterContainer, Input, FilterTitle } from "./Filter.styled";

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(getFiltered(e.target.value));

  return (
    <FilterContainer>
      <FilterTitle>
        <RiPhoneFindLine color='#c21111e2'></RiPhoneFindLine>
        Find contacts by name
      </FilterTitle>
      <Input type='text' onChange={onChange} placeholder='enter name' />
    </FilterContainer>
  );
}
Filter.propTypes = {
  filter: PropTypes.string,
};
