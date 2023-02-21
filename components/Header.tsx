import React from 'react';
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header :{
    padding: 20,
    backgroundColor:"#BA94D1",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600"
  }
})

export default Header;