import React from 'react'

function Note({ title, content}) {
  return (
    <div className='note'>
      <span>{title}</span>
      <p>{content}</p>
    </div>
  )
}

export default Note
