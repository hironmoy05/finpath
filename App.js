import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.sectionSearch}>
          <Text>Search</Text>
        </View>
        <View style={styles.sectionMain}></View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  sectionSearch: {
    padding: 16,
    backgroundColor: "orangered",
  },

  sectionMain: {
    flex: 1,
    padding: 16,
    backgroundColor: "yellowgreen",
  },
});
