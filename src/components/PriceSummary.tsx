import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PriceSummaryProps = {
  subtotal: number;
  shipping: number;
  total: number;
};

export function PriceSummary({ subtotal, shipping, total }: PriceSummaryProps) {
  return (
    <View style={styles.card}>
      {/* TODO: Reuse in both Cart and Checkout screens. */}
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.value}>${shipping.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#0F172A", borderRadius: 14, padding: 14, gap: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  label: { color: "#94A3B8", fontSize: 14 },
  value: { color: "#F8FAFC", fontSize: 14, fontWeight: "600" },
  totalLabel: { color: "#F8FAFC", fontSize: 16, fontWeight: "800" },
  totalValue: { color: "#22D3EE", fontSize: 16, fontWeight: "800" }
});
