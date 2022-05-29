import React, { useState } from 'react';
import useFriendStatus from '../../hooks/useFriendStatus';
import Circle from './Circle';

const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'rasd' },
  { id: 3, name: 'asds' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={(e) => setRecipientID(Number(e.target.value))}
        aria-label="채팅 수신자 선택"
      >
        {friendList.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
}
