import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const Posts = props => {
    useEffect(() => {
        props.fetchPosts();
    }, []);

    useEffect(() => {
        if (props.newPost.title) {
            props.posts.unshift(props.newPost);
            console.log("b");
        }
    }, [props.newPost, props.posts]);

    return (
        <div>
            <h1>Posts</h1>
            {props.posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
