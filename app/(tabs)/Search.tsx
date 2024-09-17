import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState } from "react";
import Beach from "../components/search/beach/Beach";
import Mountain from "../components/search/mountain/Mountain";
import Camping from "../components/search/camping/Camping";

const BEACH = "BEACH";
const MOUNTAIN = "MOUNTAIN";
const CAMPING = "CAMPING";
export default function Search() {
  const [page, setPage] = useState<any>(BEACH);
  const renderPage = () => {
    switch (page) {
      case BEACH:
        return <Beach />;
      case MOUNTAIN:
        return <Mountain />;
      case CAMPING:
        return <Camping />;
      default:
        return <Beach />;
    }
  };
  return (
    <View style={styles.container}>
      {/* 1 Seach-menu */}
      <View style={{ height: 80, padding: 20 }}>
        <SeachHeader />
      </View>
      {/* 2 nav option */}
      <View style={{ height: 60, width: "100%" }}>
        <NavMenu page={page} setPage={setPage} />
      </View>
      <View style={{ height: '80%', width: "100%", backgroundColor:'white',padding:20}}>
        {renderPage()}
        </View>
      {/* 3 Render Box Image */}
    </View>
  );
}
const SeachHeader = () => {
  return (
    <View
      style={{
        height: "100%",
        borderWidth: 1,
        borderColor: "rgba(128, 128, 128, 0.5)",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <Octicons
        style={{ marginLeft: 15 }}
        name="search"
        size={24}
        color="black"
      />
      <TextInput
        style={{ marginLeft: 10, width: "80%", paddingVertical: 5 }}
        placeholder="Where do you want to stay?"
      />
    </View>
  );
};
const NavMenu = ({ page, setPage }: any) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: "30%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setPage(BEACH)}
      >
        <MaterialCommunityIcons name="beach" size={24} color="black" />
        <Text>Beach</Text>
        {page == BEACH ? (
          <View
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#49c2d1",
              position: "absolute",
              bottom: 0,
            }}
          ></View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "30%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setPage(MOUNTAIN)}
      >
        <FontAwesome6 name="mountain" size={20} color="black" />
        <Text>Mountain</Text>
        {page == MOUNTAIN ? (
          <View
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#49c2d1",
              position: "absolute",
              bottom: 0,
            }}
          ></View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "30%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setPage(CAMPING)}
      >
        <FontAwesome6 name="house-flag" size={20} color="black" />
        <Text>Camping</Text>
        {page == CAMPING ? (
          <View
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#49c2d1",
              position: "absolute",
              bottom: 0,
            }}
          ></View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebfdff",
    marginTop: 30,
    flex: 1,
  },
});
