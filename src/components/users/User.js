import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';

class User extends Component {
  componentDidMount() {
    // passing the login param from /user/:login to getUser function
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;
    return (
      <div>
        <img
          src={avatar_url}
          alt='bruh'
          className='round-img'
          style={{ width: '15rem' }}
        />
        <h1>{login}</h1>
        <p>
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Locaton: </strong>
          {location}
        </p>
        <p>
          <strong>URL: </strong>
          <a href={blog}>{blog}</a>
        </p>
        <p>
          <strong>Hireable? </strong>
          {hireable ? (
            <i className='fas fa-check text-success' />
          ) : (
            <i className='fas fa-times-circle text=danger' />
          )}
        </p>
        <br />
        <p>{bio}</p>
        <Link to='' className='btn btn-light'>
          Back to search
        </Link>
      </div>
    );
  }
}

export default User;
