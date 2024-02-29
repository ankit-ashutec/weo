import {Pizza} from '@assets/images';
import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import Svg, {Text, Path, Circle as SVGCircle} from 'react-native-svg';
import {CircleProps} from './circle.types';
import {Colors} from '@utils';
import {styles} from './circle.styles';

const {width} = Dimensions.get('window');
const Circle: React.FC<CircleProps> = ({days, degree, miles, price}) => {
  const radius = width / 2.5;
  const strokeWidth = 10;
  const centerX = radius + strokeWidth / 2;
  const centerY = radius + strokeWidth / 2;
  const imageSize = width / 3;

  const getX = (angle: number) =>
    centerX + radius * Math.cos((angle * Math.PI) / 180);

  const getY = (angle: number) =>
    centerY + radius * Math.sin((angle * Math.PI) / 180);

  return (
    <View style={styles.container}>
      <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
        <Text
          x={centerX}
          y={centerY - centerY / 1.5}
          textAnchor="middle"
          fontSize={20}
          fontWeight="bold"
          fill={Colors.Green}>
          {`$${price}`}
        </Text>
        <Text
          x={centerX}
          y={centerY - centerY / 1.85}
          textAnchor="middle"
          fontSize={14}
          fill="black">
          {`$${(Number(price) / 12).toFixed(2)}/month`}
        </Text>
        <Text
          x={centerX}
          y={centerY + centerY / 1.3}
          textAnchor="middle"
          fontSize={20}
          fill="black">
          {degree}
        </Text>

        <SVGCircle
          cx={centerX}
          cy={centerY + centerY / 1.7}
          r={5}
          strokeWidth={3}
          fill="transparent"
          stroke="black"
        />
        <Text
          x={centerX - centerX / 1.4}
          y={centerY - 10}
          textAnchor="middle"
          fontSize={20}
          fontWeight="bold"
          fill={Colors.RedPink}>
          {miles}
        </Text>
        <View
          style={{
            width: 30,
            height: 2,
            left: centerX - centerX / 1.25,
            top: centerY - 5,
            backgroundColor: Colors.RedPink,
          }}
        />
        <Text
          x={centerX - centerX / 1.4}
          y={centerY + 13}
          textAnchor="middle"
          fontSize={14}
          fill="black">
          Miles
        </Text>
        <Text
          x={centerX + centerX / 1.4}
          y={centerY - 8}
          textAnchor="middle"
          fontSize={20}
          fontWeight="bold"
          fill={Colors.Blue}>
          {days}
        </Text>
        <View
          style={{
            width: 30,
            height: 2,
            left: centerX + centerX / 1.6,
            top: centerY - 5,
            backgroundColor: Colors.Blue,
          }}
        />
        <Text
          x={centerX + centerX / 1.4}
          y={centerY + 13}
          textAnchor="middle"
          fontSize={14}
          fill="black">
          Days
        </Text>

        <Image
          source={Pizza}
          style={{
            width: imageSize,
            height: imageSize,
            left: centerX - imageSize / 2,
            top: centerY - imageSize / 2,
            borderRadius: imageSize,
          }}
        />

        {/* Custom Arcs */}
        <Path
          id="textPath"
          d={`
            M ${getX(91)} ${getY(91)}
            A ${radius} ${radius} 0 0 1 ${getX(215)} ${getY(215)}
          `}
          stroke={Colors.RedPink}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Path
          d={`
            M ${getX(215)} ${getY(215)}
            A ${radius} ${radius} 0 0 1 ${getX(218)} ${getY(218)}
          `}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Path
          d={`
            M ${getX(218)} ${getY(218)}
            A ${radius} ${radius} 0 0 1 ${getX(327)} ${getY(327)}
          `}
          stroke={Colors.Green}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Path
          d={`
            M ${getX(327)} ${getY(327)}
            A ${radius} ${radius} 0 0 1 ${getX(330)} ${getY(330)}
          `}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Path
          d={`
            M ${getX(330)} ${getY(330)}
            A ${radius} ${radius} 0 0 1 ${getX(88)} ${getY(88)}
          `}
          stroke={Colors.Blue}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Path
          d={`
            M ${getX(88)} ${getY(88)}
            A ${radius} ${radius} 0 0 1 ${getX(91)} ${getY(91)}
          `}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
      </Svg>
    </View>
  );
};

export default Circle;
