import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screen/home/HomeScreen'; // Đảm bảo đường dẫn đúng đến `HomeScreen`

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Ẩn tiêu đề mặc định
      }}>
      {/* Tab cho Home */}
      <Tab.Screen
        name="Home" // Tên tab là "Home"
        component={HomeScreen} // Component hiển thị
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
