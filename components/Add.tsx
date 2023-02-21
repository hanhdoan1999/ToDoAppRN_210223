import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";

function Add({handleAdd}:any) {

  const [text, setText ] = useState("");

  const handleChange = (val:string) =>{
    setText(val)
  }

  const getText = () => {
    handleAdd(text);
    setText("");
  }

  return (
    <View>
      <TextInput 
       style={styles.input}
       placeholder="Please enter text"
       onChangeText={handleChange}
       value={text}
       />
      <Button color={"#7F669D"} title="Add" onPress={getText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#BA94D1",
    marginBottom: 10
  }
})

export default Add;