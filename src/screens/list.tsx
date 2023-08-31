import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Post } from "../types/Post";
import { useGetPostsQuery } from "../store/slices/apiPost";
import { FlatList, Text, ListRenderItemInfo, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import ListItem from "../components/listitem";

interface ItemProps {
  item: Post
}

//Initialized outside to avoid creating component during re renders
const RenderItem = ({item}:ItemProps): JSX.Element =>{
  return (
    <ListItem  item={item} />
  )
}

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

const style = StyleSheet.create({
  itemContainer: {
    flex:1,
    padding: 20,
    borderWidth:1,
    borderRadius: 3,
    marginVertical: 5
  }
});

export default ListScreen;