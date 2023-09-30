import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch";
import config from "../../../config";

const Detail = ({ route }) => {
  const { id } = route.params;
  const { data } = useFetch(`${config.API_URL}/${id}`);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title} </Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}> {data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
