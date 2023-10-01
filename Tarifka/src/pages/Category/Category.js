import React from "react";
import { FlatList, ActivityIndicator, Text } from "react-native";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";

const Category = ({ navigation }) => {
  const api = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { error, data, loading } = useFetch(api);

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
    />
  );

  if (loading) {
    <ActivityIndicator size={"large"} />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return <FlatList data={data.categories} renderItem={renderProduct} />;
};

export default Category;
