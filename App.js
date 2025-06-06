import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen1 = () =>{
  const navigation = useNavigation();
  return(
    <View>
      <Image source={require('./assets/graphicDesign.jpg')}></Image>
      <Text>hola</Text>
    </View>
  );
}


const HomeStack = createNativeStackNavigator();
const BStack = createNativeStackNavigator();
const CStack = createNativeStackNavigator();
const DStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home1" component={HomeScreen1} />
    <HomeStack.Screen name="Home2" component={HomeScreen1} />
  </HomeStack.Navigator>
}

const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackNavigator}/>
    <Tab.Screen name="NoHome" component={HomeStackNavigator}/>
    <Tab.Screen name="Homing Missile" component={HomeStackNavigator}/>
    <Tab.Screen name="Homeless" component={HomeStackNavigator}/>
  </Tab.Navigator>
}


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
