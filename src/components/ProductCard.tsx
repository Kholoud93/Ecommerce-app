import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Product } from "../types/ecommerce";

type ProductCardProps = {
  product: Product;
  onPress: (productId: string) => void;
};

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(product.id)}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.meta}>
        {/* TODO: Show category badge and rating following Figma card spacing. */}
        {product.category}
      </Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#0F172A", borderRadius: 14, padding: 12, gap: 8 },
  imagePlaceholder: { height: 120, borderRadius: 12, backgroundColor: "#1E293B" },
  name: { color: "#F8FAFC", fontSize: 15, fontWeight: "700" },
  meta: { color: "#94A3B8", fontSize: 12 },
  price: { color: "#22D3EE", fontSize: 16, fontWeight: "800" }
});
