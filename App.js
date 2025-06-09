import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

//STACK 1
const HomeScreen1 = () =>{
  const navigation = useNavigation();
  return(
    <View style={styles.view}>
      <Text>hola</Text>
      <Button title="Ir A ScreenA2" onPress={() => navigation.navigate('ScreenA2')} />
    </View>
  );
}

const HomeScreen2 = ()=>{

}
//STACK 2
const BScreen1 = ()=>{

} 
const BScreen2 = () =>{

}
//STACK 3
const CScreen1 = ()=>{

}
const CScreen2 = () =>{

}
//STACK 4
const DScreen1 = () =>{

}
const DScreen2 = () =>{

}
const HomeStack = createNativeStackNavigator();
const BStack = createNativeStackNavigator();
const CStack = createNativeStackNavigator();
const DStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home1" component={HomeScreen1} />
    <HomeStack.Screen name="Home2" component={HomeScreen2} />
  </HomeStack.Navigator>
}

const BStackNavigator = ()=>{
  <BStack.Navigator>
    <BStack.Screen name="B1" component={BScreen1}/> 
    <BStack.Screen name="B2" component={BScreen2}/>
  </BStack.Navigator>
}

const CStackNavigator = () =>{
  <CStack.Navigator>
    <CStack.Screen name="C1" component={CScreen1}/>
    <CStack.Screen name="C2" component={CScreen2}/>
  </CStack.Navigator>
}

const DStackNavigator = () =>{
  <DStack.Navigator>
    <DStack.Screen name="D1" component={DScreen1}/>
    <DStack.Screen name="D2" component={DScreen2}/>
  </DStack.Navigator>
}
const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackNavigator}/>
    <Tab.Screen name="BStack" component={BStackNavigator}/>
    <Tab.Screen name="CStack" component={CStackNavigator}/>
    <Tab.Screen name="DStack" component={DStackNavigator}/>
  </Tab.Navigator>
}


export default function App() {
  return (
    <View style={[styles.container, styles.view]}>
      {/*<NavigationContainer>
        <TabNavigation />
      </NavigationContainer>*/}
        <Text>hola</Text>
        <Image source={require('./assets/graphicDesign.jpg')}/>
        <Button title="Ir A ScreenA2" onPress={() => navigation.navigate('ScreenA2')} />
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
  view:{
    backgroundColor:'black' 
  }
});
