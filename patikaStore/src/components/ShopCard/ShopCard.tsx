import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ShopCard.style';

const ShopCard = ({items}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: items.imgURL}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}> {items.title}</Text>
        <Text style={styles.price}> {items.price}</Text>

        {items.inStock ? null : (
          <Text style={styles.outOfStock}>STOKTA YOK</Text>
        )}
      </View>
    </View>
  );
};

export default ShopCard;
