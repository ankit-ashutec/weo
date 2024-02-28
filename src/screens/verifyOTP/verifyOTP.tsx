import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Container, ShadowContainer} from '@hoc/index';
import {Button, ErrorMessage} from '@components';
import {Colors, getErrorProps} from '@utils';
import {styles} from './verifyOTP.styles';
import {useVerifyOTPController} from './verifyOTP.controller';
import OTPTextInput from 'react-native-otp-textinput';
import {Controller} from 'react-hook-form';
import {BackArrow, Edit} from '@assets/svg';

const VerifyOTP: React.FC = () => {
  const {
    control,
    errors,
    isValid,
    resendTimer,
    generateNewOTP,
    handleSubmit,
    onSubmit,
    onBackPress,
  } = useVerifyOTPController();
  return (
    <Container
      withScroll
      ScrollViewProps={{
        contentContainerStyle: styles.scrollView,
        keyboardShouldPersistTaps: 'never',
      }}>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={onBackPress}>
        <BackArrow />
      </TouchableOpacity>
      <View style={styles.container}>
        <ShadowContainer>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>OTP</Text>
            <View style={styles.rowView}>
              <Text style={styles.description}>Sent to +91 9924087008</Text>
              <TouchableOpacity
                style={styles.editButton}
                onPress={onBackPress}
                activeOpacity={0.8}>
                <Edit style={{marginLeft: 5}} fill={Colors.Primary} />
              </TouchableOpacity>
            </View>
          </View>
          <Controller
            control={control}
            name="otp"
            render={({field: {onChange}}) => (
              <OTPTextInput
                textInputStyle={styles.otpTextContainer}
                tintColor={Colors.Primary}
                handleTextChange={onChange}
              />
            )}
          />
          <ErrorMessage {...getErrorProps(errors.otp)} />
          <TouchableOpacity
            disabled={resendTimer > 0}
            activeOpacity={0.8}
            onPress={generateNewOTP}
            style={styles.bottomContainer}>
            <Text
              style={[
                styles.resendText,
                {color: resendTimer > 0 ? Colors.Gray900 : Colors.Primary},
              ]}>
              Resend OTP{resendTimer > 0 && ` in ${resendTimer} sec`}
            </Text>
          </TouchableOpacity>
        </ShadowContainer>
      </View>
      <Button
        name="Login"
        style={styles.button}
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
};

export default VerifyOTP;
