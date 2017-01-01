import React, { Component } from 'react'

const Notebook = ({ title, description, deleteNotebook }) => (
  <div className='item'>
    <div className='content'>
      <h4>{title}</h4>
      <p>{description}</p>
      <span onClick={deleteNotebook}>delete</span>
    </div>
  </div>
)

export default Notebook
