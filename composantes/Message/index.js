/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text } from 'react-native'
import React from 'react'
import { formatDate } from '../../functions'

const Message = ({item}) => {
    const isMine = () => {
        return item.user.id === 1;
    }
  return (
    <View style={{backgroundColor: isMine() ? '#DCF8CC' : '#fff', alignSelf: isMine()? 'flex-end' : 'flex-start', margin: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingTop:15, 
    paddingBottom: 5,
    maxWidth: '80%',
    borderTopRightRadius: isMine() ? 0 : 25,
    borderTopLeftRadius: isMine() ? 25 : 0,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    elevation: 15,
    }}>
      <Text style={{color: '#000'}}>{item.message}</Text>
      <Text style={{color: 'gray', fontStyle: 'italic', textAlign: 'right'}}>{formatDate(item.date)}</Text>
    </View>
  )
}

export default Message