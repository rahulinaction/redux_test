import React, { memo, useCallback } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Post } from "../types/Post"
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

//Callback is used for useNavigation
interface ItemProps {
  item: Post
}

const ListItem = ({item}:ItemProps) =>{
  //Adding type for navigation
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onPressCallback = useCallback(()=>{
    navigation.navigate('Detail',{
      id: item.id
    });
  },[item])

  return (
    <TouchableOpacity onPress={onPressCallback} style={style.itemContainer}>
      <Text testID={"id_"+item.id}>{item.id}</Text>
      <Text testID={"title_"+item.id}>{item.title}</Text>
      <Text testID={"body_"+item.id}>{item.body}</Text>
    </TouchableOpacity>
  )
}

export default memo(ListItem);

const style = StyleSheet.create({
  itemContainer: {
    flex:1,
    padding: 20,
    borderWidth:1,
    borderRadius: 3,
    marginVertical: 5
  }
});