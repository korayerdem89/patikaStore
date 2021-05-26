/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';
const Card = ({catalog}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: catalog.imgURL}} />
      <View style={styles.descriptions}>
        <Text style={styles.title}>{catalog.title}</Text>
        <Text style={styles.model}>{catalog.model}</Text>
        <Text>{catalog.description}</Text>
        <Text style={styles.price}>{catalog.price}</Text>
      </View>
    </View>
  );
};
export default Card;

