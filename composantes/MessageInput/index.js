/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { COLORS } from '../../outils/constantes';

const MessageInput = () => {
  return (
    <View style={[styles.container]}>
      <TextInput
        style={styles.input}
        placeholder="Message..."
        placeholderTextColor={'gray'}
      />
      <View
        style={{
          width: '20%',
          height: '100%',
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          overflow: 'hidden',
          backgroundColor: COLORS.main,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button
          title="Send"
          color={'#00000001'}
          accessibilityLabel="Learn more about this purple button"
          onPress={() => {}}
          style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
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
    padding: 5,
    elevation: 10,
    marginBottom: 2,
    height: 60,
  },
  input: {
    backgroundColor: '#d0d0d0',
    color: '#000',
    padding: 8,
    height: '100%',
    width: '80%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default MessageInput;
