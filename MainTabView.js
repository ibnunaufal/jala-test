import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import harga from './harga';
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
    harga: harga,
    kabar: KabarRoute,
    penyakit: PenyakitRoute,
});
export default function MainTabView() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'harga', title: 'Harga' },
        { key: 'kabar', title: 'Kabar' },
        { key: 'penyakit', title: 'Penyakit' },
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

const styles = StyleSheet.create({})