import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, id } }) => {
  return (
    <div className='card text-center'>
      <img
        src={`https://avatars0.githubusercontent.com/u/${id}?v=4`}
        alt='bruh'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <a
        href={`https://github.com/${login}`}
        className='btn btn-dark btn-sm my-1'
        target='_blank'
        rel='noopener noreferrer'
      >
        More
      </a>
      <h2>ID: {id}</h2>
    </div>
  );
};

UserItem.defaultProps = {
  user: PropTypes.object.isRequired,
};

UserItem.propTypes = {};

export default UserItem;
