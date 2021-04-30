import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView,Platform,StatusBar } from "react-native";



const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color:'#fff'}}>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    padding: 16,
    backgroundColor: "green",
    
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    
  },
});
