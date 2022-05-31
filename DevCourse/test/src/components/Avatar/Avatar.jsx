import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ImageComponent from '../Image/Image';
import AvatarGroup from './AvatarGroup';

const shapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => shapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;
  & > img {
    transition: opacity 0.2s ease-out;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle',
  placeholder,
  alt,
  mode = 'cover',
  TYPE,
  style,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper TYPE={TYPE} style={style} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  TYPE: 'Avatar',
};

Avatar.propTypes = {
  TYPE: 'Avatar',
};

Avatar.Group = AvatarGroup;

export default Avatar;
