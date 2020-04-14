import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({size = 24, color = 'black'}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.43093 12.8221L17.4309 21.8221C17.581 21.9259 17.7565 21.9866 17.9386 21.9978C18.1207 22.009 18.3024 21.9702 18.464 21.8855C18.6256 21.8009 18.761 21.6736 18.8554 21.5175C18.9499 21.3614 18.9999 21.1825 18.9999 21.0001V3.00005C19.0001 2.81753 18.9502 2.63845 18.8558 2.48223C18.7614 2.32601 18.6261 2.19861 18.4644 2.11382C18.3028 2.02904 18.121 1.99011 17.9389 2.00126C17.7567 2.0124 17.581 2.0732 17.4309 2.17705L4.43093 11.1771C4.29849 11.2695 4.19033 11.3925 4.11564 11.5357C4.04095 11.6789 4.00195 11.838 4.00195 11.9996C4.00195 12.1611 4.04095 12.3202 4.11564 12.4634C4.19033 12.6066 4.29849 12.7296 4.43093 12.8221V12.8221Z"
        fill={color}
      />
    </Svg>
  );
};