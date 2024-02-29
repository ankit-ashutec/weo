import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Share = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox="0 0 48 48" {...props}>
    <Path d="M8 8c-1.8 1.8-2 3.3-2 16s.2 14.2 2 16c1.8 1.8 3.3 2 16 2 17.1 0 18-.5 18-10 0-4.7-.3-6-1.5-6-1.1 0-1.5 1.3-1.5 5.3 0 2.9-.5 5.8-1.2 6.5-1.7 1.7-25.9 1.7-27.6 0-1.7-1.7-1.7-25.9 0-27.6.7-.7 3.6-1.2 6.5-1.2 4 0 5.3-.4 5.3-1.5C22 5 10.6 5.4 8 8z" />
    <Path d="M34 7.3c0 .7.5 1.8 1.2 2.5.9.9.7 1.2-1.2 1.2-3 0-10.7 3.4-13.3 5.8-2.8 2.5-5 7.3-3.9 8.4.5.5 1.9-.6 3.5-3 1.5-2.4 4.4-4.8 6.9-6.1 4.9-2.4 10-2.9 8-.9-1.6 1.6-1.5 3.8.1 3.8 1.5 0 6.7-5.1 6.7-6.6C42 11 36.7 6 35.2 6c-.7 0-1.2.6-1.2 1.3zM14.7 28.7c-1.3 1.3-.7 5.3.8 5.3 1 0 1.5-1 1.5-3 0-2.9-.9-3.8-2.3-2.3z" />
  </Svg>
);
export default Share;