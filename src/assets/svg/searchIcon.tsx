import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SearchIcon = (props: SvgProps) => (
  <Svg width={28} height={28} viewBox="0 0 50 50" {...props}>
    <Path d="M13 5.3C7.9 8 4 14.3 4 20c0 11.4 12 19.7 22.9 15.9 3.2-1.1 3.4-1 9.2 4.7l5.9 5.8 2.2-2.2 2.2-2.2-5.7-5.8-5.8-5.8 1.6-3.7c2.1-5.1 1.9-9.7-.8-14.7-2.7-5.1-9-9-14.7-9-2 0-5.6 1-8 2.3zm15.9 4.5c5.8 4.3 6.4 14 1.2 19.3-7.6 7.5-20.4 3-21.7-7.7C7 10.4 19.9 3.1 28.9 9.8z" />
  </Svg>
);
export default SearchIcon;
