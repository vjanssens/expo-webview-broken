import { Text, View, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Before</Text>
      <WebView style={styles.container} originWhitelist={["*"]} source={{ uri: 'https://reactnative.dev/' }} />
      <Text>After</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 10,
    // marginTop: 10,
  },
});
