import React from 'react'
import {NavLink} from 'react-router-dom';
import './mainSidebar.css'

export default function MainSidebar(props) {
  
  
  const list = props.list.map(folder => (
    folder.id !== props.active ?
    <li className={`app__folderList borderBox`} key={folder.id}><NavLink to={`/folder/:${folder.id}`} >{folder.name}</NavLink></li>
    : <li className={`app__folderList borderBox active`} key={folder.id}><NavLink to={`/folder/:${folder.id}`} >{folder.name}</NavLink></li>
  ))
  return (
    <>
      {list}
    </>
  )
}
