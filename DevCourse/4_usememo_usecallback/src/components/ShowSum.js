import React from 'react';
import { useMemo } from 'react';

const sum = (n) => {
  console.log('Start');
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += 1;
  }
  console.log('Finished');
  return result;
};

const ShowSum = React.memo(({ label, n }) => {
  console.log('ShowSum');
  const result = useMemo(() => sum(n), [n]);
  return (
    <span>
      {label}: {result}
    </span>
  );
});

export default ShowSum;
