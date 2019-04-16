import React from 'react';
import AddColor from './addColor';

const sayHello = (props) => {
  return(
    <div style={{color: props.color}}>{props.speaker} > こんにちわ せかい</div>
  );
};

export default AddColor(sayHello, "red");
