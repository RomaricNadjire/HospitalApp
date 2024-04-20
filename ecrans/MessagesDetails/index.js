/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { FakeMessages } from '../../FackData/fackMessages';
import Message from '../../composantes/Message';
import MessageInput from '../../composantes/MessageInput';

const MessageDetails = ({route, navigation}) => {
  const {item} = route.params;

  useEffect(()=>{
    navigation.setOptions({title: item.name});
  });
  return (
    <View style={{flex: 1, backgroundColor: '#e1f1e1'}}>
      <FlatList style={{color: '#000',}} data={FakeMessages} keyExtractor={item => item.id} renderItem={({item})=>{
        return <Message item={item} />
      }}></FlatList>
      <MessageInput />
    </View>
  )
}

export default MessageDetails