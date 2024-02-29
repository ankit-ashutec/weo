import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Menu = (props: SvgProps) => (
  <Svg width={30} height={30} fill="white" {...props}>
    <Path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3z" />
  </Svg>
);
export default Menu;
