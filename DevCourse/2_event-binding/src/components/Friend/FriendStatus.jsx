import useFriendStatus from '../../hooks/useFriendStatus';

function FriendListItem({ friend }) {
  const isOnline = useFriendStatus(friend.id);
  if (isOnline === null) {
    return 'Lodaing...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendListItem;
