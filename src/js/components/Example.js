import React from 'react';
import PropTypes from 'prop-types';

const Example = ({text, label}) => (
  <button type="button" onClick={() => alert(text)}>
    {label}
  </button>
);

Example.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string
};

export default Example;
