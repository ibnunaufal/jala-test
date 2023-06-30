import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Kabar from './page/Kabar';
import Penyakit from './page/Penyakit';
import Harga2 from './page/Harga2';

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

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: 'harga', title: 'Harga' },
    { key: 'kabar', title: 'Kabar' },
    { key: 'penyakit', title: 'Penyakit' },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#1B77DF', height: 4}}
      style={{ backgroundColor: 'white' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused?'#1B77DF':'#737373' }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor='#1B77DF' style='auto' />
      <Text style={{ fontSize: 20, padding: 16, backgroundColor: '#1B77DF', color: 'white' }}>
        Jala
      </Text>
      <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
