import React from 'react'
import Timestamp from 'react-timestamp'
import { browserHistory } from 'react-router'

function Note({ id, title, content, created_at, path }) {
  let className = 'note'
  if (path == `/home/${id}`) {
    className = 'note active'
  }

  return (
    <div
      className={className}
      onClick={() => {
        browserHistory.push(`/home/${id}`)
      }}
    >
      <span>{title}</span>
      <p>
        <Timestamp time={created_at} />
      </p>
      <p>
        {content}
      </p>
    </div>
  )
}

export default Note
