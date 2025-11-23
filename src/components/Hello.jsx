// src/components/Hello.jsx
import React from "react";
import PropTypes from "prop-types";

export default function Hello({ name }) {
  return <p>Hello, {name}! This is a mini app deployed with CI/CD 🚀</p>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
