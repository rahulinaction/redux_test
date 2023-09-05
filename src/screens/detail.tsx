//import { Text } from "@rneui/base";
import React from "react";
import { useGetPostByIdQuery } from "../store/slices/apiPost";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../navigation/types";
import {Post}  from '../types/Post';
import { View, Text, StyleSheet } from "react-native";

type Props = RootStackScreenProps<'Detail'>;

export const DetailScreen = ({route}: Props) => {

  const { id } = route.params;

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useGetPostByIdQuery(id);

  if(!post) {
    return null;
  }
  return (
    <View style={styles.itemContainer}>
      <Text>{post.id}</Text>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex:1, 
    padding: 20
  }
})

export default DetailScreen;