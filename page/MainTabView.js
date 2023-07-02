import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Harga2 from "./Harga2";
import Kabar from "./Kabar";
import Penyakit from "./Penyakit";


const renderScene = SceneMap({
  harga: Harga2,
  kabar: Kabar,
  penyakit: Penyakit,
});
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#1B77DF", height: 4 }}
    style={{ backgroundColor: "white" }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color: focused ? "#1B77DF" : "#737373" }}>
        {route.title}
      </Text>
    )}
  />
);
export default function MainTabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const av = new Animated.Value(0)
  av.addListener(() => {return})

  const [routes] = React.useState([
    { key: "harga", title: "Harga" },
    { key: "kabar", title: "Kabar" },
    { key: "penyakit", title: "Penyakit" },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        animationEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
