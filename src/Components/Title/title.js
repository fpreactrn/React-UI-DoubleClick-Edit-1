import React from 'react';
import classes from './title.module.css';

const Title = (props) => {
    return (
      <div className = {classes.Heading}>{props.children}</div>
    )
}

export default Title;