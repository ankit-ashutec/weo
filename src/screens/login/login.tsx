import {Text, View} from 'react-native';
import React from 'react';
import {Container, ShadowContainer} from '@hoc/index';
import {Button, InputWithControl} from '@components';
import {styles} from './login.styles';
import {useLoginController} from './login.controller';
import {getErrorProps} from '@utils';

const Login: React.FC = () => {
  const {control, errors, isValid, onButtonPress} = useLoginController();

  return (
    <Container
      withScroll
      ScrollViewProps={{contentContainerStyle: styles.scrollView}}>
      <View style={styles.container}>
        <ShadowContainer>
          <Text style={styles.loginText}>Log in</Text>
          <InputWithControl
            control={control}
            name="phoneNumber"
            containerStyle={styles.input}
            placeholder="Phone Number"
            leftComponent={() => (
              <Text style={styles.countryCodeText}>+91</Text>
            )}
            keyboardType="phone-pad"
            maxLength={10}
            {...getErrorProps(errors.phoneNumber)}
          />
        </ShadowContainer>
      </View>
      <Button
        name="Verify"
        style={styles.button}
        disabled={!isValid}
        onPress={onButtonPress}
      />
    </Container>
  );
};

export default Login;
