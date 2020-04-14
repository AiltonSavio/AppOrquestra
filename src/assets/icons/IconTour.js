import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export default ({size = 24, color = 'black'}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="40" height="40" rx="5" fill={color} />
      <Path
        d="M29 11V23.5C29 24.4283 28.6313 25.3185 27.9749 25.9749C27.3185 26.6313 26.4283 27 25.5 27C24.5717 27 23.6815 26.6313 23.0251 25.9749C22.3687 25.3185 22 24.4283 22 23.5C22 22.5717 22.3687 21.6815 23.0251 21.0251C23.6815 20.3687 24.5717 20 25.5 20C26.04 20 26.55 20.12 27 20.34V14.47L17 16.6V25.5C17 26.4283 16.6313 27.3185 15.9749 27.9749C15.3185 28.6313 14.4283 29 13.5 29C12.5717 29 11.6815 28.6313 11.0251 27.9749C10.3687 27.3185 10 26.4283 10 25.5C10 24.5717 10.3687 23.6815 11.0251 23.0251C11.6815 22.3687 12.5717 22 13.5 22C14.04 22 14.55 22.12 15 22.34V14L29 11Z"
        fill="white"
      />
    </Svg>
  );
};