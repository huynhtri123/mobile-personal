import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigatiors/AuthNavigator';
import MainNavigator from './src/navigatiors/MainNavigators';
import {StatusBar} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const App = () => {
  // Using useState to manage the splash screen visibility
  const [isShowSplash, setIsShowSplash] = useState(true);
  // State for storing access token
  const [accessToken, setAccessToken] = useState('');

  // Access async storage
  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false); // Hide splash screen after 1.5 seconds
    }, 1500);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    checkLogin(); // Check login status when the component mounts
  }, []);

  const checkLogin = async () => {
    const token = await getItem();
    console.log(token);
    // If token exists, set it to state
    if (token) {
      setAccessToken(token);
    }
  };

  return (
    <>
      {/* StatusBar is rendered once at the top */}
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Conditional rendering based on isShowSplash and accessToken */}
      {!isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {/* Render MainNavigator if token exists, else render AuthNavigator */}
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
