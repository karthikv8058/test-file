import React from 'react';

function Button(props) {
  return (
    <button className={`btn btn-danger text-white border-0 d-block w-100 ${props.color}`}>
        {props.title}
    </button>
  );
}

export default Button;
