import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* TODO: Add user card, order history list, and settings rows. */}
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#0B1020" },
  title: { color: "#F8FAFC", fontSize: 24, fontWeight: "800" }
});
