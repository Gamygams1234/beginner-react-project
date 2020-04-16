import React, { Component } from "react";

export default class Post extends Component {
  state = { id: null }; // this is strting the id at null
  componentDidMount() {
    let id = this.props.match.params.post_id; // here is where we are setting the paramaters to be at the back of the URL
    this.setState({
      id: id, // so now the id will be set to the id that we just passed
    });
  }
  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    );
  }
}
