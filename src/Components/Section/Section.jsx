import React from "react";
import PropTypes from "prop-types";
import { Sections } from "./Section.styled";

const Section = ({ children }) => {
  return <Sections>{children}</Sections>;
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Section;
