import React from "react";
import { connect } from "react-redux";
import { fetchPostsUsers } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="ittem" key={post.id}>
          <i className="large aligned user middle icon" />
          <div className="content">
            <div className="descripttion">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.posts);
    return <div className="ui relaxed devided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsUsers }
)(PostList);
