import React, { Component } from 'react'

const Notebook = ({ title, description, deleteNotebook }) => (
  <li>
    <h3>{title} <span onClick={deleteNotebook}>x</span></h3>
    <p>{description}</p>
  </li>
)

export default Notebook
