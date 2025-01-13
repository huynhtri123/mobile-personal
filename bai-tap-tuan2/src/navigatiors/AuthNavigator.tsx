import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screen/auth/LoginScreen';

const AuthNavigator = () => {
  // Tạo stack navigator
  const Stack = createNativeStackNavigator();

  // Trả về stack navigator với màn hình Login
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login" // Tên của màn hình, nên dùng tên ngắn gọn và rõ ràng
        component={LoginScreen} // Component hiển thị cho màn hình Login
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
