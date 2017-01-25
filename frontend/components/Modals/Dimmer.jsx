import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { hideNotebookList } from '../../actions/notebooks'

class Dimmer extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName='dimmer-animation'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.renderDimmer()}
      </ReactCSSTransitionGroup>
    )
  }

  renderDimmer() {
    const { isPanelShowing, hideNotebookList } = this.props

    if (isPanelShowing) {
      return (
        <div
          key="enter"
          className="dimmer"
          onClick={e => hideNotebookList()}
        >
        </div>
      )
    } else {
      return <div key="leave"></div>
    }
  }
}

function mapStateToProps(state) {
  return {
    isPanelShowing: state.notebooks.isPanelShowing
  }
}

const mapDispatchToProps = ({
  hideNotebookList
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dimmer)
