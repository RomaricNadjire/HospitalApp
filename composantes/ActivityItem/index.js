/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
import SVG_IMAGE from './../../assets/images/svg/undraw_medicine_b-1-ol.svg'

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrolableListItem}>
    <SVG_IMAGE  height={60} width={60}/>
    <Text style={styles.mainText}>{item.mainText}</Text>
    <Text style={styles.subText}>{item.subText}</Text>
  </TouchableOpacity>
  );
};

export default ActivityItem;
