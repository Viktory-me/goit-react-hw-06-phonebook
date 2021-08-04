import React from "react";
import PropTypes from "prop-types";
import { RiPhoneFindLine } from "react-icons/ri";
import { FilterContainer, Input, FilterTitle } from "./Filter.styled";

export default function Filter({ value, onChange }) {
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};
