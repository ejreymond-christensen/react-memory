import React from "react";
import "./characters.css";


const Characters = props => (
  <img src= {require(`../../images/${props.image}.jpeg`)} className="character" alt= {props.image} id= {props.id} onClick={() => props.choose(props.id)}
/>
);

export default Characters;
