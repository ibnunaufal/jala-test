import {
  ActivityIndicator,
  Alert,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import * as api from "./../services/api";

export default function HargaDetail({ route }) {
  const [regionList, setRegionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const item = route.params.item;
  const iconUrl = (name) => {
    return "https://app.jala.tech/storage/" + name;
  };
  const verifIcon = (bool) => {
    return bool ? (
      <View
        style={{
          backgroundColor: "#FFF8E7",
          borderRadius: 10,
          flexDirection: "row",
          padding: 5,
        }}
      >
        <Image
          source={require("./../assets/star.svg")}
          style={{ width: 15, height: 15, marginRight: 5 }}
        />
        <Text>Terverifikasi</Text>
      </View>
    ) : (
      <View
        style={{ backgroundColor: "#E5E5E5", borderRadius: 10, padding: 5 }}
      >
        <Text>Belum Terverifikasi</Text>
      </View>
    );
  };
  const priceFormat = (name) => {
    return name ? String(name).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;
  };

  useEffect(() => {
    getRegion();
  }, []);

  const loadingEnd = () => {
    setLoading(false);
  };

  function getRegion() {
    api
      .getRegion()
      .then((res) => {
        console.log(res.data.data);
        setRegionList(res.data.data);
        loadingEnd();
      })
      .catch((err) => {
        loadingEnd();
        Alert.alert(err);
      });
  }

  const RenderItemDetails = () => {
    return Object.entries(item).map(([key, value]) => {
      if (key.startsWith("size_")) {
        const size = key.split("_")[1];
        return (
          <View style={{ flexDirection: "row", marginBottom: 8 }} key={key}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16 }}>Size {size}</Text>
            </View>
            <Text style={{ fontSize: 16, flex: 3 }}>
              Rp {priceFormat(value)}
            </Text>
          </View>
        );
      }
      return null; // Skip other properties if needed
    });
  };

  function getRegionName(type, id) {
    if (regionList == null) {
      return "Kosong";
    }
    for (let i = 0; i < regionList.length; i++) {
      const e = regionList[i];
      if (e.id == id) {
        if (type == "province") {
          return e.province_name;
        }
        if (type == "regency") {
          return e.regency_name;
        }
      }
    }
    return id;
  }
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
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
      ) : (
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View
              style={{
                padding: 12,
                borderBottomColor: "#F1F5F9",
                borderBottomWidth: 4,
              }}
            >
              <Text style={styles.title}>
                {getRegionName("province", item.region_id)}
              </Text>
              <Text style={[styles.title, { color: "#737373" }]}>
                {getRegionName("regency", item.region_id)}
              </Text>
            </View>
            <View style={{ padding: 12 }}>
              <View style={{ flexDirection: "row", marginBottom: 8 }}>
                <View style={{ display: "flex", justifyContent: "center" }}>
                  <Text>{item.date}</Text>
                </View>
                <View>{verifIcon(item.creator.buyer)}</View>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 8 }}>
                <View style={{ marginRight: 10 }}>
                  <Image
                    source={{
                      uri: iconUrl(item.creator.avatar),
                    }}
                    style={{ width: 32, height: 32, borderRadius: 32 / 2 }}
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 12, color: "#A09E9E" }}>
                    Supplier{" "}
                  </Text>
                  <Text style={styles.title}>{item.creator.name}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <View>
                  <Text style={{ fontSize: 12, color: "#A09E9E" }}>
                    Kontak{" "}
                  </Text>
                  <Text style={styles.title}>{item.creator.phone} </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    let phoneNumber = String(item.creator.phone);
                    if (Platform.OS !== "android") {
                      phoneNumber = `telprompt:${String(item.creator.phone)}`;
                    } else {
                      phoneNumber = `tel:${String(item.creator.phone)}`;
                    }
                    Linking.canOpenURL(phoneNumber)
                      .then((supported) => {
                        if (!supported) {
                          Alert.alert(
                            "Phone number is not available " + phoneNumber
                          );
                        } else {
                          return Linking.openURL(phoneNumber);
                        }
                      })
                      .catch((err) => console.log(err));
                  }}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                    backgroundColor: "#1B77DF",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white" }}>Hubungi</Text>
                </TouchableOpacity>
              </View>
              <Text style={[styles.title, { marginBottom: 8 }]}>
                Daftar Harga{" "}
              </Text>
              <View style={{}}>
                <RenderItemDetails />
              </View>
              <Text style={{ fontSize: 14 }}>Catatan </Text>
              <Text style={{ fontSize: 14 }}>{item.remark} </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: "#454646",
  },
  size: {
    fontSize: 16,
  },
});
