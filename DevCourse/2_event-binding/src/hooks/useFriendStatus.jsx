import { useState, useEffect } from 'react';

function useFriendStatus(id) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(id, handleStatusChange);
    };
  });
  return isOnline;
}

export default useFriendStatus;
