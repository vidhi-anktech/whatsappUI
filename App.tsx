import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import ChatScreen from './screens/Chat';
import PhoneScreen from './screens/PhoneScreen';
import CameraScreen from './screens/CameraScreen';
import ContactScreen from './screens/ContactScreen';
import AccountScreen from './screens/AccountScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#075e54',
        tabBarStyle: { height: 50, padding: 8 }
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Chat',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIcon: ({ color, size }) => (
              <Entypo name='chat' size={25} color={'#075e54'} />
            ),
          }}
        />
        <Tab.Screen
          name="Phone"
          component={PhoneScreen}
          options={{
            tabBarLabel: 'Calls',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIcon: ({ color, size }) => (
              <Feather name='phone-call' size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarLabel: 'Camera',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIcon: ({ color, size }) => (
              <Feather name='camera' size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            tabBarLabel: 'Contacts',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIcon: ({ color, size }) => (
              <Feather name='users' size={25} />
            ),
          }}

        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIcon: ({ color, size }) => (
              <Feather name='user' size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  tabBar: {}
})

function StackNavigator(arg0: { Login: { screen: any; }; Signup: { screen: any; }; }) {
  throw new Error('Function not implemented.');
}
