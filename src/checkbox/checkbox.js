import React from 'react';

const Checkbox = props => {
  return (
    <label>
      <input type={'checkbox'} name={props.name} checked={props.checked} onChange={props.toggleBoxes}/>
      {props.chars}
    </label>)
}

export default Checkbox;