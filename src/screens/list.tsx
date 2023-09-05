import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback } from "react";
import { Post } from "../types/Post";
import { useGetPostsQuery } from "../store/slices/apiPost";
import { FlatList, Text, ListRenderItemInfo, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import ListItem from "../components/listitem";

interface ItemProps<T> {
  item: T
}

const RenderItem = ({item}:ItemProps<Post>): JSX.Element =>{
  return (
    <ListItem  item={item} />
  )
}


//Initialized outside to avoid creating component during re renders


const keyExtractor = (item:Post) => `post-${item.id}`;

const ListScreen = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useGetPostsQuery();


  /*if(isLoading) {
    return (
      <Text>Loading ....</Text>
    )
  }*/

  return(
    <>
      <FlatList 
        testID="flatlist"
        initialNumToRender={5} 
        keyExtractor={keyExtractor} 
        style={{paddingHorizontal: 10}} 
        renderItem={RenderItem} 
        data={posts} />
      {isError && error ? <Text testID="errorID">Error occured</Text>: null}

    </>
  )
}

export default ListScreen;