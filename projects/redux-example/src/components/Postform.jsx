import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

const PostForm = props => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onChange = e => {
        e.target.name === "title" ? setTitle(e.target.value) : setBody(e.target.value);
    };
    
    const onSubmit = e => {
        e.preventDefault();
    
        const post = {
          title,
          body
        };
    
        props.createPost(post);
    };

    return (
        <div>
        <h1>Add Post</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={onChange}
              value={title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={onChange}
              value={body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
};

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
