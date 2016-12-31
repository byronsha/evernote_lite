import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SidebarContainer from './Sidebar/SidebarContainer';

class App extends Component {
  render() {
    const sidebarStyle = {
      position: 'absolute',
      width: '100px'
    }

    const contentStyle = {
      position: 'absolute',
      marginLeft: '100px'
    }

    return (
      <div>
        <div style={sidebarStyle}>
          <SidebarContainer />
        </div>

        <div style={contentStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
