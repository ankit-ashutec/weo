import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const UnCheck = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox="0 0 96 96" {...props}>
    <Path d="M27.1 23.4c-4.5 2.5-5 4.9-5.1 24.4 0 20 .6 22.8 5.5 25 3.6 1.6 37.4 1.6 41 0C73.4 70.6 74 67.7 74 48c0-19.7-.6-22.6-5.5-24.8-3.8-1.7-38.2-1.6-41.4.2zM68 28c1.9 1.9 2 3.3 2 20s-.1 18.1-2 20c-1.9 1.9-3.3 2-20 2-23.7 0-22 1.7-22-22 0-16.7.1-18.1 2-20 1.9-1.9 3.3-2 20-2s18.1.1 20 2z" />
  </Svg>
);
export default UnCheck;
