import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BackArrow = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 100 100" {...props}>
    <Path d="M47.2 27.3C35.6 39 26 49.2 26 50c0 2 42.1 44 44.1 44 1.9 0 3.9-2 3.9-3.9 0-.9-8.7-10.2-19.2-20.8L35.5 50l19.3-19.3C65.3 20.1 74 10.8 74 9.9 74 8 72 6 70 6c-.8 0-11.1 9.6-22.8 21.3z" />
  </Svg>
);
export default BackArrow;
