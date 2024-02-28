import {Pizza} from '@assets/images';
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Svg, {
  Text,
  Image,
  Path,
  Circle as SVGCircle,
  Defs,
} from 'react-native-svg';
import {CircleProps} from './circle.types';

const {width} = Dimensions.get('window');
const Circle: React.FC<CircleProps> = ({days, degree, miles, price}) => {
  const radius = width / 2.5;
  const strokeWidth = 10;
  const centerX = radius + strokeWidth / 2;
  const centerY = radius + strokeWidth / 2;
  const imageWidth = 150;
  const imageHeight = 150;

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
          fill="green">
          {`$${price}`}
        </Text>
        <Text
          x={centerX}
          y={centerY - centerY / 2}
          textAnchor="middle"
          fontSize={16}
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
          fill="red">
          {miles}
        </Text>
        <Text
          x={centerX - centerX / 1.4}
          y={centerY + 10}
          textAnchor="middle"
          fontSize={16}
          fill="black">
          Miles
        </Text>
        <Text
          x={centerX + centerX / 1.4}
          y={centerY - 10}
          textAnchor="middle"
          fontSize={20}
          fontWeight="bold"
          fill="blue">
          {days}
        </Text>
        <Text
          x={centerX + centerX / 1.4}
          y={centerY + 10}
          textAnchor="middle"
          fontSize={16}
          fill="black">
          Days
        </Text>

        <Image
          href={Pizza}
          x={centerX - imageWidth / 2}
          y={centerY - imageHeight / 2}
          width={imageWidth}
          height={imageHeight}
        />

        {/* Custom Arcs */}
        <Path
          id="textPath"
          d={`
            M ${getX(91)} ${getY(91)}
            A ${radius} ${radius} 0 0 1 ${getX(215)} ${getY(215)}
          `}
          stroke="red"
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
          stroke="blue"
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
          stroke="green"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Circle;
