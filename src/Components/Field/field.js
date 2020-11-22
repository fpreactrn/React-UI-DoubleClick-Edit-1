import React from 'react';
import classes from './field.module.css';

const Field = (props) => {
    return (
      <div className = {classes.TextField}>
        <div>{props.children}</div>
        {
        props.active ? 
          <input value = {props.value} onChange = {props.inputChange} onBlur = {props.blur} autoFocus/> 
            : 
          <div onDoubleClick = {props.doubleClick} className = {classes.Change}>
            {props.value}
          </div>
        }
      </div>
    )
  }


export default Field;