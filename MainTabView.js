import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

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
    kabar: KabarRoute,
    penyakit: PenyakitRoute,
});
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
export default function MainTabView() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'harga', title: 'Harga' },
        { key: 'kabar', title: 'Kabar' },
        { key: 'penyakit', title: 'Penyakit' },
    ]);
    return (
        <View style={{ flex: 1 }}>
          <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={renderTabBar}
            />
        </View>
    )
}

const styles = StyleSheet.create({})