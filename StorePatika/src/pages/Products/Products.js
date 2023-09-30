import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import config from "../../../config";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";

const Products = ({ navigation }) => {
  const { error, data, loading } = useFetch(config.API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    <ActivityIndicator size={"large"} />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
