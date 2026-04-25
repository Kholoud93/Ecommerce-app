import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Product } from "../types/ecommerce";

type CartItemRowProps = {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export function CartItemRow({ product, quantity, onIncrease, onDecrease, onRemove }: CartItemRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.actions}>
        {/* TODO: Replace quick buttons with shared QuantityStepper component. */}
        <Pressable style={styles.smallBtn} onPress={onDecrease}>
          <Text style={styles.btnLabel}>-</Text>
        </Pressable>
        <Text style={styles.qty}>{quantity}</Text>
        <Pressable style={styles.smallBtn} onPress={onIncrease}>
          <Text style={styles.btnLabel}>+</Text>
        </Pressable>
        <Pressable onPress={onRemove}>
          <Text style={styles.remove}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { backgroundColor: "#0F172A", borderRadius: 14, padding: 12, gap: 10 },
  info: { gap: 4 },
  name: { color: "#F8FAFC", fontSize: 14, fontWeight: "700" },
  price: { color: "#22D3EE", fontSize: 14, fontWeight: "700" },
  actions: { flexDirection: "row", alignItems: "center", gap: 8 },
  smallBtn: { width: 28, height: 28, borderRadius: 8, backgroundColor: "#1E293B", alignItems: "center", justifyContent: "center" },
  btnLabel: { color: "#F8FAFC", fontWeight: "700" },
  qty: { color: "#F8FAFC", minWidth: 18, textAlign: "center" },
  remove: { color: "#94A3B8", marginLeft: 10 }
});
