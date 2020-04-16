import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    posts: [],
  };
  // here  we are getting our data from our API in component did mount
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      this.setState({
        posts: response.data.slice(0, 10), //we are putting it into our state
      });
    });
  }
  render() {
    const { posts } = this.state; // we grab our posts
    const postList = posts.length ? (
      posts.map((post) => {
        // then we map the info that we have
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}
