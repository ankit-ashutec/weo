import React, {useEffect} from 'react';
import {ToastProvider} from './toast/toast.provider';
import {Routes} from '@setup/routes';
import {Platform, StatusBar} from 'react-native';
import {Colors} from '@utils';

const Providers: React.FC = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Colors.White);
    }
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
};

export default Providers;
