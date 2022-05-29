import React from 'react';
import PropTypes from 'prop-types';
import useFriendStatus from '../../hooks/useFriendStatus';

function FriendListItem({ friend: { id, name } }) {
  const isOnline = useFriendStatus(id);
  return <li style={{ color: isOnline ? 'green' : 'black' }}>{name}</li>;
}

FriendListItem.propTypes = {
  friend: PropTypes.shape.isRequired,
};

export default FriendListItem;
