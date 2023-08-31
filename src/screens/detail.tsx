//import { Text } from "@rneui/base";
import React from "react";
import { useGetPostByIdQuery } from "../store/slices/apiPost";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../navigation/types";
import {Post}  from '../types/Post';
import { View, Text } from "react-native";

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
    <View style={{flex:1, padding: 20}}>
      <Text>{post.id}</Text>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  )
}

export default DetailScreen;