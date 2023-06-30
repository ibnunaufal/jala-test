import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Kabar from './page/Kabar';
import Penyakit from './page/Penyakit';
import Harga2 from './page/Harga2';
import MainTabView from './MainTabView';
import HargaDetail from './page/HargaDetail'

const HargaRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const KabarRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const PenyakitRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673a99' }} />
);

const renderScene = SceneMap({
  harga: Harga2,
  kabar: Kabar,
  penyakit: Penyakit,
});

const Stack = createNativeStackNavigator();

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: 'harga', title: 'Harga' },
    { key: 'kabar', title: 'Kabar' },
    { key: 'penyakit', title: 'Penyakit' },
  ]);
  

  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor='#1B77DF' style='auto' />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#1B77DF" },
              headerTintColor: "white",              
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen name='Main' component={MainTabView} options={{title:'Jala'}} />
            <Stack.Screen name='HargaDetail' component={HargaDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
});
