import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type QuantityStepperProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function QuantityStepper({ quantity, onIncrease, onDecrease }: QuantityStepperProps) {
  return (
    <View style={styles.wrap}>
      <Pressable style={styles.btn} onPress={onDecrease}>
        <Text style={styles.btnLabel}>-</Text>
      </Pressable>
      <Text style={styles.qty}>{quantity}</Text>
      <Pressable style={styles.btn} onPress={onIncrease}>
        <Text style={styles.btnLabel}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", gap: 12 },
  btn: { width: 34, height: 34, borderRadius: 10, backgroundColor: "#1E293B", alignItems: "center", justifyContent: "center" },
  btnLabel: { color: "#F8FAFC", fontWeight: "800", fontSize: 16 },
  qty: { color: "#F8FAFC", fontSize: 16, fontWeight: "700", minWidth: 24, textAlign: "center" }
});
