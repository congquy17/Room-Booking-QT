import { StyleSheet, Text, TextInput, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
export default function Home() {
  return (
    <View style={styles.container}>
      {/* 1 Seach-menu */}
      <View style={{borderWidth:1,flexDirection:'row',alignItems:'center',padding:5,backgroundColor:'white',margin:20,borderRadius:10}}>
        <Octicons style={{marginLeft:15}} name="search" size={24} color="black" />
        <TextInput style={{marginLeft:10,width:'80%',paddingVertical:5}} placeholder="Where do you want to stay?" />
      </View>
      {/* 2 Render Box Image */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ebfdff',
    marginTop: 30,
    flex: 1,
  },
});
