import React from 'react'
import './header.css'

function Header(props) {
  return (
    <header className="app__header borderBox mediumFont">
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header

