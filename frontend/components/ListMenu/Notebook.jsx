import React, { Component } from 'react'

const Notebook = ({ title, description, deleteNotebook }) => (
  <div className='notebook'>
    <span>{title}</span>
    <p>{description}</p>
    <i onClick={deleteNotebook} className="trash outline icon large"></i>
  </div>
)

export default Notebook
