/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';
const Card = ({catalog}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: catalog.imgURL}} />
      <View style={styles.descriptions}>
        <Text>{catalog.title}</Text>
        <Text>{catalog.description}</Text>
        <Text>{catalog.price}</Text>
      </View>
    </View>
  );
};
export default Card;
