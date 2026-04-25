import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ProductDetailsScreen() {
  return (
    <View style={styles.container}>
      {/* TODO: Add image, price/rating, quantity stepper, and add-to-cart CTA. */}
      <Text style={styles.title}>Product Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#0B1020" },
  title: { color: "#F8FAFC", fontSize: 24, fontWeight: "800" }
});
