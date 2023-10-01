import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./ProductCard.style";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductCard = ({ product, onSelect }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onSelect} style={styles.product}>
        <Image
          style={styles.image}
          source={{ uri: product.strCategoryThumb }}
        />
        <Text style={styles.title}>{product.strCategory}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductCard;
