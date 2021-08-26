import React, { Component } from "react";

class ShowInfoCounter extends Component {
  componentDidMount() {
    console.log("this.props didMount", this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counterProp !== this.props.counterProp) {
      console.log("this.props componentDidUpdate", this.props.counterProp);
    }
  }

  render() {
    return <div>Show counter pasado por props {this.props.counterProp}</div>;
  }
}

export default ShowInfoCounter;
