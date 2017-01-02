import React from 'react'

function Notebook({ title, description, deleteNotebook }) {
  return (
    <div className='notebook'>
      <span>{title}</span>
      <p>{description}</p>
      <i onClick={deleteNotebook} className="trash outline icon large"></i>
    </div>
  )
}

export default Notebook
