import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Container, ShadowContainer} from '@hoc/index';
import {Button, ErrorMessage} from '@components';
import {Colors, getErrorProps} from '@utils';
import {styles} from './verifyOTP.styles';
import {useVerifyOTPController} from './verifyOTP.controller';
import OTPTextInput from 'react-native-otp-textinput';
import {Controller} from 'react-hook-form';

const VerifyOTP: React.FC = () => {
  const {control, errors, isValid} = useVerifyOTPController();
  return (
    <Container
      withScroll
      ScrollViewProps={{contentContainerStyle: styles.scrollView}}>
      <View style={styles.container}>
        <ShadowContainer>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>OTP</Text>
            <Text style={styles.description}>Sent to +91 9924087008</Text>
          </View>
          <Controller
            control={control}
            name="otp"
            render={({field: {onChange, value}}) => (
              <OTPTextInput
                textInputStyle={styles.otpTextContainer}
                tintColor={Colors.Primary}
                autoFocus
                handleTextChange={onChange}
              />
            )}
          />
          <ErrorMessage {...getErrorProps(errors.otp)} />
          <TouchableOpacity activeOpacity={0.8} style={styles.bottomContainer}>
            <Text style={styles.description}>Resend OTP in 15 sec</Text>
          </TouchableOpacity>
        </ShadowContainer>
      </View>
      <Button name="Login" style={styles.button} disabled={!isValid} />
    </Container>
  );
};

export default VerifyOTP;
