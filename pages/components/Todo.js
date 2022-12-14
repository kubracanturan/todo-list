import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? '#f8e7d7' : '#C65D7B',
    }}
  >
    {text}
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
