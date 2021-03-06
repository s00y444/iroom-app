
import React from 'react';
//screens
import Room from '../../screens/Room'
import Checkin from '../../screens/Checkin'
import Costumer from '../../screens/Costumer'
import Setting from '../../screens/Setting'
// import Checkout from '../../screens/Checkout'
import Icon from 'react-native-vector-icons/AntDesign';

import { createStackNavigator } from 'react-navigation-stack';
import  { createBottomTabNavigator } from 'react-navigation-tabs';
import  { BORDER_COLOR, BORDER_WIDTH } from '../../config/constant';

const RoomStack = createStackNavigator({
  Room : {
    screen : Room,
    navigationOptions : {
      header : null
    }
  }

});

const CostumerStack = createStackNavigator({
  Costumer : {
    screen : Costumer,
    navigationOptions : {
      header : null
    }
  }
})

const CheckinStack = createStackNavigator({
  Checkin : {
    screen : Checkin,
    navigationOptions : {
      header : null
    }
  },
  // AddCheckin : {
  //   screen : AddCheckin,
  //   navigationOptions : {
  //     header : null
  //   }
  // },
  // Checkout : {
  //   screen : Checkout,
  //   navigationOptions : {
  //     header : null
  //   }
  // }
})

const SettingStack = createStackNavigator({
  Setting : {
    screen : Setting,
    navigationOptions : {
      header : null
    }
  }
})

const BottomNavigation = createBottomTabNavigator(
  {
    Checkin : {
      screen: CheckinStack,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarLabel: 'Checkin',
        tabBarIcon: ({tintColor}) => (
          <Icon name="checkcircleo" color={tintColor} size={25} />
        ),
      },
    },
    Room : {
      screen: RoomStack,
      navigationOptions: {
        header: null,
        tabBarLabel: 'Room',
        tabBarIcon: ({tintColor}) => (
          <Icon name="solution1" color={tintColor} size={25} />
        ),
      },
    },
    Costumer: {
      screen: CostumerStack,
      navigationOptions: {
        tabBarLabel: 'Costumer',
        tabBarIcon: ({tintColor}) => (
          <Icon name="carryout" color={tintColor} size={25} />
        ),

      },
    },
    Setting: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({tintColor}) => (
          <Icon name="setting" color={tintColor} size={25} />
        ),
      },
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#11998e',
      inactiveTintColor: '#ccc',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#ffffff',
        elevation : 1,
        borderColor : BORDER_COLOR
      },
    },
  },
);


export default BottomNavigation;
