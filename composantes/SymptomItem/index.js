/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, PADDING } from '../../outils/constantes';

const SymptomItem = ({item}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row', marginVertical: 6, margin: 5, backgroundColor: 'white', padding:PADDING.horizontal, gap: 10, alignItems: 'center', borderRadius: 6, 
    minWidth: 200, elevation: 6}}>
        <Image source={require('../../assets/images/pain.png')} style={{height: 30, width:30}} />
        <Text style={{color: COLORS.black}}>
            {item.libelle}
        </Text>
    </TouchableOpacity>
  );
};

export default SymptomItem;
