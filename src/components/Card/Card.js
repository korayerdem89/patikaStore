/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Card.style';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text styles={styles.title}>Arya Stark</Text>
        <Text style={styles.text}>Winter is coming</Text>
      </View>
      <TouchableOpacity style={styles.button_container}>
        <Text style={styles.button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
