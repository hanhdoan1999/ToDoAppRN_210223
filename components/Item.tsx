import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from "react-native";

function Item({item, handlePress} : any) {
  return (
    <TouchableOpacity onPress = {()=> handlePress(item.id)} style = {styles.wrapItem}>
      <Text style={styles.itemName}>{item?.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapItem: {
    padding:10,
    marginTop: 25,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#BA94D1",
    borderRadius: 50,
    marginHorizontal: 30
  },
  itemName: {
    fontSize: 14,
    fontWeight: "500"
  }
})

export default Item;