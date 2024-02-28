import React, {useState, useEffect} from 'react';
import {Animated, Text} from 'react-native';
import {ToastProps} from './toast.types';
import {styles} from './toast.styles';

const Toast: React.FC<ToastProps> = ({message, onClose}) => {
  const [visible, setVisible] = useState(true);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        hideToast();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const hideToast = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      onClose();
    });
  };

  return (
    <>
      {visible && (
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                  }),
                },
              ],
            },
          ]}>
          <Text style={styles.message}>{message}</Text>
        </Animated.View>
      )}
    </>
  );
};

export default Toast;
