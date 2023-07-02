import {
  ActivityIndicator,
  Button,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

export default function PenyakitDetail({ route }) {
  const item = route.params.item;
  let url = `https://app.jala.tech/web_view/diseases/${item}`;
  let shareUrl = "https://app.jala.tech/diseases?per_page=15&page=1";
  console.log(url);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const handleLoadEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onShare}>
          <Image
            source={require("./../assets/share-white.svg")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: shareUrl,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F5F9" }}>
      <View style={{ flex: 1, borderRadius: 10 }}>
        {loading && (
          <ActivityIndicator
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 4,
            }}
            size="large"
            color="#1B77DF"
          />
        )}
        <WebView
          style={{ flex: 1, margin: 20, borderRadius: 10 }}
          source={{ uri: url }}
          onLoadEnd={handleLoadEnd}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
