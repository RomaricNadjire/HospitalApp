/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { COLORS } from '../../outils/constantes';

const SearchBar = ({ onSearch, dataToSearch }) => {

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const filteredData = dataToSearch.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    onSearch(filteredData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher..."
        placeholderTextColor={'gray'}
        value={searchText}
        onChangeText={setSearchText}
        onChange={handleSearch}
        onEndEditing={handleSearch}
        onSubmitEditing={handleSearch}
      />
      <View style={{width: '30%', height: '100%', borderTopRightRadius: 15, borderBottomRightRadius: 15, overflow: 'hidden', backgroundColor: COLORS.main}}>
        <Button
          title="Search"
          color={'#00000001'}
          accessibilityLabel="Learn more about this purple button"
          onPress={handleSearch}
          style={{flex: 1, padding: 10}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    position: 'relative',
    elevation: 10,
    marginBottom: 10,
    height: 60,
  },
  input: {
    backgroundColor: '#d0d0d0',
    color: '#000',
    padding: 8,
    height: '100%',
    width: '70%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default SearchBar;