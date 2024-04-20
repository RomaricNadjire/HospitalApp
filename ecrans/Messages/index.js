/* eslint-disable prettier/prettier */
import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { FackChats } from '../../FackData/fackChat';
import MessagesList from '../../composantes/MessageList';
import SearchBar from './SearchBar';

const Messages = ({navigation}) => {
  const [data, setData] = useState(FackChats);

  return (
    <>
      <SearchBar dataToSearch={FackChats} onSearch={setData}/>
      <FlatList data={data} keyExtractor={item => item.id}
      renderItem={({item})=>{
        return (<MessagesList item={item} navigation={navigation}/>);
      }}/>
    </>
  )
}

export default Messages;
