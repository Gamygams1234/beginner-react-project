import React, { Component } from "react";
import axios from "axios"; // we want to import axios

export default class Post extends Component {
  state = { post: null }; // we need the post so we do not need the id at this one
  componentDidMount() {
    let id = this.props.match.params.post_id; // here is where we are setting the paramaters to be at the back of the URL
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }
  // we are getting all of the content
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    );
    return <div className="container">{post}</div>;
  }
}
