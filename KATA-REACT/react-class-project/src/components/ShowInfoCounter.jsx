import React, { Component } from 'react'

class ShowInfoCounter extends Component {


  componentDidMount() {
    console.log('this.props didMount', this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter !== this.props.counter) {
      console.log('this.props componentDidUpdate', this.props)
    }

  }

  render() {
    return (
      <div>
        Show info counter {this.props.counter}
      </div>
    )
  }
}

export default ShowInfoCounter
