import React from 'react';
import AddColor from './addColor';

const sayHello = (props) => {
  return(
    <div style={{color: props.color}}>{props.speaker} > Hello world</div>
  );
};

export default AddColor(sayHello, "green");
