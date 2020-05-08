import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  // we are getting all of the content
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    // this is how we send them home after
    this.props.history.push("/");
  };
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    );
    return <div className="container">{post}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  // this is the id of the slug
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => {
      return post.id === id;
    }),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
