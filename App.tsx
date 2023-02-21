
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Add from "./components/Add";
import Header from "./components/Header";
import Item from "./components/Item";


function App(): JSX.Element {
  const [data, setData] = useState([
    {
      text:"Lorem Ipsum is simply dummy text",
      id:"1"
    },
    {
      text:"React Native provides a number",
      id:"2"
    },
    {
      text:"You're not limited to the components ",
      id:"3"
    }
  ]);

  const clickPress = (val:any)=>{
    setData((pre) => pre.filter(el => el.id !== val))
  }

  const handleAddData = (val:string) => {
    // let newArr = [...data].concat({text:val,id: Math.random().toString()})
    setData((pre) => {
      return [
        {text:val, id: Math.random().toString()},
        ...pre
      ]
    })
  }

  return (
    <View >
      <Header/>
      <View style={styles.content}>
        <Add handleAdd={handleAddData}/>
        <FlatList
        data = {data}
        // renderItem={({item})=> <Text>{item.text}</Text>}
        renderItem = {({item})=> <Item item={item} handlePress={clickPress}/>}
        keyExtractor = {item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    marginHorizontal: 30
  }
})

export default App;
