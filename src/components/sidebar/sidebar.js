import React from 'react'
import './sidebar.css';

export default function Sidebar(props) {


  return (
    <ul className="app__sidebar">
      {props.children}
    </ul>
  )
}
