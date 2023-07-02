import {
  FlatList,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import * as api from "./../services/api";
import { useNavigation } from "@react-navigation/native";

export default function Penyakit() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const navigation = useNavigation();
  let shareUrl = "https://app.jala.tech/diseases?per_page=15&page=1";

  const imageUrl = (name) => {
    return "https://app.jala.tech/storage/" + name;
  };

  const renderItem = ({ item }) => {
    const handlePress = () => {
      // Navigate to 'HargaDetail' screen and pass the 'item' object as a parameter
      navigation.navigate("PenyakitDetail", { item: item.id });
    };
    return (
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          margin: 14,
          borderColor: "#E5E5E5",
        }}
      >
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={{ uri: imageUrl(item.image) }}
            style={{
              width: "100%",
              height: 160,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 12 }}>
          <TouchableOpacity onPress={handlePress}>
            <Text
              style={{
                fontSize: 18,
                color: "#454646",
                marginVertical: 5,
                fontWeight: 800,
              }}
            >
              {item.full_name} ({item.short_name})
            </Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{ fontSize: 14, color: "#737373", marginVertical: 5 }}
            >
              {item.meta_description}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              paddingVertical: 5,
              paddingBottom: 10,
            }}
          >
            <View style={{ display: "flex", justifyContent: "center" }}>
              <Text style={{ fontSize: 14, color: "#737373" }}>
                {item.updated_at}
              </Text>
            </View>
            <TouchableOpacity onPress={onShare}>
              <Image
                source={require("./../assets/share-black.svg")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

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

  function getData() {
    api.getPenyakit(page, 15).then((res) => {
      setData(res.data.data);
    });
  }

  useEffect(() => {
    console.log("useEffect 3");
    getData();
  }, []);
  return (
    <View>
      <Text
        style={{
          color: "#004492",
          fontSize: 18,
          fontWeight: 700,
          paddingHorizontal: 20,
          paddingTop: 15,
        }}
      >
        Dafar Penyakit
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
