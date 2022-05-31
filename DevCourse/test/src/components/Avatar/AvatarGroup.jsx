import React from 'react';

const AvatarGroup = ({ children, shape = 'circle', size = 70 }) => {
  const avatars = React.Children.toArray(children)
    .filter((element) => {
      if (React.isValidElement(element) && element.props.TYPE === 'Avatar') {
        return true;
      }
      return false;
    })
    .map((avatar, index, array) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          marginLeft: -size / 5,
          zIndex: array.length - index,
        },
      });
    });

  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

export default AvatarGroup;
