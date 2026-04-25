import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function CheckoutScreen() {
  return (
    <View style={styles.container}>
      {/* TODO: Add address block, payment block, summary, and place-order action. */}
      <Text style={styles.title}>Checkout Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#0B1020" },
  title: { color: "#F8FAFC", fontSize: 24, fontWeight: "800" }
});
