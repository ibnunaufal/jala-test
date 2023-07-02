import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
import * as api from "./../services/api";

const element = (e) => {
  return <View></View>;
};

export default function Harga2() {
  const [regionList, setRegionList] = useState([]);
  const [filteredRegionList, setFilteredRegionList] = useState([]);
  const [isSizeModal, setIsSizeModal] = useState(true);
  const [bottomSheetOpened, setBottomSheetOpened] = useState(false);
  const [sizeArr, setSizeArr] = useState([]);
  const [selectedSize, setSelectedSize] = useState(100);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchText, setSearchText] = useState("");

  const iconUrl = (name) => {
    return "https://app.jala.tech/storage/" + name;
  };

  const [data, setData] = useState([]);
  const [temp, setTemp] = useState("");
  const [loading, setLoading] = useState(true);

  function getData() {
    setData([]);
    console.log("start calling 2");
    api
      .getPriceList(0, selectedSize, selectedRegion)
      .then((res) => {
        console.log(res.data.data[0].region);
        setData(res.data.data);
        loadingEnd();
      })
      .catch((err) => {
        loadingEnd();
        Alert.alert(err);
      });
  }

  function getRegion() {
    api
      .getRegion()
      .then((res) => {
        console.log("start");
        setRegionList(res.data.data);
        setFilteredRegionList(res.data.data);
        getData();
      })
      .catch((err) => {
        Alert.alert(err);
      });
  }

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

  useEffect(() => {
    setLoading(true);
    getRegion();
  }, [selectedSize, selectedRegion]);
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

  const handleFilter = (text) => {
    console.log("nyari " + text);
    const filteredList = regionList.filter((item) =>
      item.full_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRegionList(filteredList);
  };

  const handleClearFilter = () => {
    setSearchText("");
    setFilteredRegionList(regionList);
  };

  const priceFormat = (name) => {
    return name == "" ? "" : String(name).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    const handlePress = () => {
      // Navigate to 'HargaDetail' screen and pass the 'item' object as a parameter
      navigation.navigate("HargaDetail", { item });
    };
    return (
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          padding: 10,
          margin: 14,
          borderColor: "#E5E5E5",
        }}
      >
        <View>
          {/* Top */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={{
                    uri: iconUrl(item.creator.avatar),
                  }}
                  style={{ width: 32, height: 32, borderRadius: 32 / 2 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 12, color: "#859ED1" }}>
                  Supplier{" "}
                </Text>
                <Text style={{ fontSize: 14 }}>{item.creator.name}</Text>
              </View>
            </View>
            <View>{verifIcon(item.creator.buyer)}</View>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 12, color: "#859ED1" }}> {item.date} </Text>
          <Text style={{ fontSize: 12 }}>
            {" "}
            {getRegionName("province", item.region_id)}{" "}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>
            {" "}
            {getRegionName("regency", item.region_id)}{" "}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <View>
              <Text style={{ fontSize: 12, color: "#859ED1" }}>
                {" "}
                Size {selectedSize}{" "}
              </Text>
              <Text style={{ fontSize: 22, fontWeight: 700 }}>
                {" "}
                IDR {priceFormat(item[`size_${selectedSize}`])}{" "}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={handlePress}
                style={{
                  backgroundColor: "#1B77DF",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white", fontWeight: 600 }}>
                  {" "}
                  Lihat Detail{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  // ref
  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "95%"], []);

  // callbacks
  function initArray() {
    let temp = [];
    for (let i = 2; i < 21; i++) {
      temp.push(i * 10);
    }
    setSizeArr(temp);
  }

  const handlePresentModalPress1 = useCallback(() => {
    setIsSizeModal(true);
    initArray();
    console.log(bottomSheetOpened);
    bottomSheetModalRef.current?.present();
    setBottomSheetOpened(true);
  }, []);
  const handleCloseModalPress1 = useCallback(() => {
    setIsSizeModal(true);
    initArray();
    console.log(bottomSheetOpened);
    bottomSheetModalRef.current?.close();
    setBottomSheetOpened(false);
  }, []);
  const handlePresentModalPress2 = useCallback(() => {
    setIsSizeModal(false);
    bottomSheetModalRef.current?.present();
    setBottomSheetOpened(true);
  }, []);
  const handleCloseModalPress2 = useCallback(() => {
    setIsSizeModal(false);
    bottomSheetModalRef.current?.close();
    setBottomSheetOpened(true);
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index < 0) {
      setBottomSheetOpened(false);
    }
  }, []);
  const loadingEnd = () => {
    setLoading(false);
  };
  return (
    <BottomSheetModalProvider style={{ flex: 1 }}>
      <Text
        style={{
          color: "#004492",
          fontSize: 18,
          fontWeight: 700,
          paddingHorizontal: 20,
          paddingTop: 15,
        }}
      >
        Harga Terbaru
      </Text>
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
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          bottom: 10,
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={handlePresentModalPress1}
          style={{
            backgroundColor: "#004492",
            height: 45,
            flex: 1,
            padding: 5,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flex: 1,
              }}
            >
              <Image
                source={require("./../assets/biomass.svg")}
                style={{ width: 25, height: 25, marginHorizontal: 5 }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ color: "white" }}>Size</Text>
              <Text style={{ color: "white", fontWeight: 700 }}>
                {selectedSize}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePresentModalPress2}
          style={{
            backgroundColor: "#1B77DF",
            height: 45,
            flex: 2,
            padding: 10,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image
                source={require("./../assets/location.svg")}
                style={{ width: 25, height: 25, marginRight: 5 }}
              />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: 700 }}>
                {selectedRegion == ""
                  ? "Indonesia"
                  : getRegionName("province", selectedRegion)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={2}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={(backdropProps) => {
          <BottomSheetBackdrop {...backdropProps} opacity={0.25} />;
        }}
      >
        {isSizeModal ? (
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderBottomColor: "#E9E9E9",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontWeight: 700 }}>Size</Text>
              <TouchableOpacity onPress={handleCloseModalPress1}>
                <Text style={{ color: "#1B77DF" }}>Tutup</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              {sizeArr.map((item) => {
                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => {
                      setSelectedSize(item);
                      handleCloseModalPress1();
                    }}
                    style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
              <View style={{ height: 40 }}></View>
            </ScrollView>
          </View>
        ) : (
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderBottomColor: "#E9E9E9",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontWeight: 700 }}>Region</Text>
              <TouchableOpacity onPress={handleCloseModalPress2}>
                <Text style={{ color: "#1B77DF" }}>Tutup</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginVertical: 10,
                  marginLeft: 10,
                  padding: 5,
                  backgroundColor: "#F5F6F7",
                  flexDirection: "row",
                  borderRadius: 10,
                  borderColor: "#E5E5E5",
                  borderWidth: 1,
                  width: "80%",
                }}
              >
                <Image
                  source={require("./../assets/search.svg")}
                  style={{ width: 25, height: 25, marginHorizontal: 5 }}
                />
                <TextInput
                  style={{ width: "90%", height: 30 }}
                  onChangeText={(text) => {
                    setSearchText(text);
                    handleFilter(text);
                  }}
                  value={searchText}
                  placeholder="Cari"
                />
              </View>
              <TouchableOpacity
                onPress={handleClearFilter}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20%",
                }}
              >
                <Image
                  source={require("./../assets/danger.svg")}
                  style={{ width: 25, height: 25, marginRight: 5 }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {filteredRegionList.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      setSelectedRegion(item.id);
                      handleCloseModalPress2();
                    }}
                    style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                  >
                    <Text>{item.full_name}</Text>
                  </TouchableOpacity>
                );
              })}
              <View style={{ height: 40 }}></View>
            </ScrollView>
          </View>
        )}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({});
