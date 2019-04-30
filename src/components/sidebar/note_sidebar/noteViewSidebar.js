import React from 'react'

export default function NoteViewSidebar(props) {

  const noteFolder = props.notes.find(note => (
    note.id === props.noteId
  )).folderId

  const folder = props.folders.find(folder => (
    noteFolder === folder.id
  )).name

  return (
    <div>
      <h2>{folder}</h2>
    </div>
  )
}
