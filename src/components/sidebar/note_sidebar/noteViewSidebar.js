import React from 'react'

export default function NoteViewSidebar(props) {
  

  return (
    <div>
      <h2>{props.match.params.id}</h2>
    </div>
  )
}
