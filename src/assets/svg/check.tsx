import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Check = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox="0 0 60 60" {...props}>
    <Path d="M9.2 9.2c-1.7 1.7-1.7 39.9 0 41.6 1.7 1.7 39.9 1.7 41.6 0 1.7-1.7 1.7-39.9 0-41.6-1.7-1.7-39.9-1.7-41.6 0zm34.4 11.9c.7 1.1-15.3 17.9-17 17.9-1.5 0-8.6-7.2-8.6-8.6 0-2.8 2.4-2.5 5.6.7l3.4 3.3 7.3-7.2c7.5-7.5 8.1-7.9 9.3-6.1z" />
  </Svg>
);
export default Check;
