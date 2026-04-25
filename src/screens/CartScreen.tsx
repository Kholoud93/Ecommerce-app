import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function CartScreen() {
  return (
    <View style={styles.container}>
      {/* TODO: Add cart rows, price summary, and continue-to-checkout button. */}
      <Text style={styles.title}>Cart Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#0B1020" },
  title: { color: "#F8FAFC", fontSize: 24, fontWeight: "800" }
});
