/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PADDING } from '../../outils/constantes';
import { formatDate } from '../../functions';

const MessagesList = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('InBox', {item})}
      style={{
        padding: PADDING.horizontal,
        flexDirection: 'row',
        gap: 5,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <Image
        source={require('./../../assets/profile.webp')}
        style={{ height: 50, width: 50, borderRadius: 25 }}
      />
      <View style={{ width: '90%', paddingRight: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ color: '#000', fontSize: 10 }}>
            {formatDate(item.date)}
          </Text>
        </View>
        <Text numberOfLines={1} style={{ flex: 3, color: 'gray' }}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessagesList;