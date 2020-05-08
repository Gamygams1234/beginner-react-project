import React, { Component } from "react";

import { Link } from "react-router-dom";
import Pokeball from "../Images/pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  // we are importing the image
  render() {
    console.log(this.props);
    const { posts } = this.props; // we grab our posts
    const postList = posts.length ? (
      posts.map((post) => {
        // then we map the info that we have
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="Pokeball" />
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(Home);
