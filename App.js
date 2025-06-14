import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

//STACK 1
const HomeScreen1 = () =>{
  const navigation = useNavigation();
  const [texto, setTexto] = useState();
  const update = (e) =>{
    setTexto(e.nativeEvent.text);
  }
  return(
    <View style={[styles.homeView]}>
      <Image source={require('./assets/graphicDesign.jpg')} style={{width:300, height:200, marginBottom:40, marginTop:40}}/>
      <Text>Hablale a Pepito</Text>
      <TextInput onChange={update} placeholder="Ingrese un texto" style={[styles.input, {margin: 5}]}/> 
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('Home2', {sendTexto: texto})} >
        <Text style={styles.textButton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const HomeScreen2 = ({route})=>{
  const navigation = useNavigation();
  return(
    <View style={[styles.homeView]}>
      <Text style={{marginTop:250, fontSize:30}}>Hola, {route.params.sendTexto}!</Text>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('Home1')} >
        <Text style={styles.textButton}>Volver a página anterior</Text>
      </TouchableOpacity>
    </View>
  );
}
//STACK 2
const BScreen1 = ()=>{
  const navigation = useNavigation();
  return (
    <View style={[styles.screen1]}>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('B2')} >
        <Text style={styles.textButton}>Cambiar de vista</Text>
      </TouchableOpacity>
    </View>
  );
} 
const BScreen2 = () =>{
  const navigation = useNavigation();
  return (
    <View style={[styles.screen1]}>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('B1')} >
        <Text style={styles.textButton}>Volver a la vista anterior</Text>
      </TouchableOpacity>
    </View>
  );
} 

//STACK 3
const CScreen1 = ()=>{
  const navigation = useNavigation();
  return (
    <View style={[styles.screen2]}>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('C2')} >
        <Text style={styles.textButton}>Cambiar de vista</Text>
      </TouchableOpacity>
    </View>
  );
} 

const CScreen2 = () =>{
  const navigation = useNavigation();
  return (
    <View style={[styles.screen2]}>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('C1')} >
        <Text style={styles.textButton}>Volver a la vista anterior</Text>
      </TouchableOpacity>
    </View>
  );
}
//STACK 4
const DScreen1 = () =>{
  const navigation = useNavigation();
  return (
    <View style={[styles.screen3]}>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('D2')} >
        <Text style={styles.textButton}>Cambiar de vista</Text>
      </TouchableOpacity>
    </View>
  );
}
const DScreen2 = () =>{
  const navigation = useNavigation();
  return (
    <View style={[styles.screen3]}>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => navigation.navigate('D1')} >
        <Text style={styles.textButton}>Volver a la vista anterior</Text>
      </TouchableOpacity>
    </View>
  );
}
const HomeStack = createNativeStackNavigator();
const BStack = createNativeStackNavigator();
const CStack = createNativeStackNavigator();
const DStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home1" component={HomeScreen1} />
      <HomeStack.Screen name="Home2" component={HomeScreen2} />
    </HomeStack.Navigator>
  );
}

const BStackNavigator = ()=>{
  return(
    <BStack.Navigator>
      <BStack.Screen name="B1" component={BScreen1}/> 
      <BStack.Screen name="B2" component={BScreen2}/>
    </BStack.Navigator>
  );
}

const CStackNavigator = () =>{
  return(
    <CStack.Navigator>
      <CStack.Screen name="C1" component={CScreen1}/>
      <CStack.Screen name="C2" component={CScreen2}/>
    </CStack.Navigator>
  );
}

const DStackNavigator = () =>{
  return(
    <DStack.Navigator>
      <DStack.Screen name="D1" component={DScreen1}/>
      <DStack.Screen name="D2" component={DScreen2}/>
    </DStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator}/>
      <Tab.Screen name="BStack" component={BStackNavigator}/>
      <Tab.Screen name="CStack" component={CStackNavigator}/>
      <Tab.Screen name="DStack" component={DStackNavigator}/>
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  homeView:{
    backgroundColor:'cyan',
    height:'100%',
    alignItems: 'center'
  },
  input:{
    width:100,
    backgroundColor:'white',
    borderRadius:5,
    borderBottomWidth : 1.0,
    borderTopWidth:1.0,
    borderLeftWidth:1.0,
    borderRightWidth:1.0,
    padding:'2.5px'
  },
  button:{
    marginTop: 10,
    backgroundColor:'green',
    width:'43%',
    height: '4%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderBottomWidth : 1.0,
    borderTopWidth:1.0,
    borderLeftWidth:1.0,
    borderRightWidth:1.0,
  },
  textButton:{
    color:'white',
    textAlign: 'center'
  },
  screen1:{
    backgroundColor: 'blue',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  screen2:{
    backgroundColor: 'yellow',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  screen3:{
    backgroundColor: 'red',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  }
});
