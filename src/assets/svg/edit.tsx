import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Edit = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 48 48" {...props}>
    <Path d="M20.8 18.7C6.3 33.1 6 33.5 6 37.7V42h3.8c3.6 0 4.7-.9 18.8-15.1 8.2-8.2 15.1-15.2 15.3-15.5.6-.6-6.1-7.4-7.3-7.4-.5 0-7.6 6.6-15.8 14.7zm17.6-6.6c-.8 1.4-3.4 1.1-3.4-.4 0-.8.3-1.7.7-2 .9-.9 3.4 1.3 2.7 2.4zM23.3 27.2C13.2 37.4 10 39.6 10 36.8c0-.7 4.8-6.1 10.7-12 8.5-8.5 11-10.5 12.1-9.6 1.1.9-.8 3.2-9.5 12z" />
  </Svg>
);

export default Edit;
