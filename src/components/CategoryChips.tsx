import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Category } from "../types/ecommerce";

type CategoryChipsProps = {
  value: Category;
  onChange: (category: Category) => void;
};

const categories: Category[] = ["all", "shoes", "clothing", "accessories"];

export function CategoryChips({ value, onChange }: CategoryChipsProps) {
  return (
    <View style={styles.row}>
      {categories.map((category) => {
        const active = value === category;
        return (
          <Pressable key={category} style={[styles.chip, active && styles.chipActive]} onPress={() => onChange(category)}>
            {/* TODO: Convert label casing to match Figma text style. */}
            <Text style={[styles.label, active && styles.labelActive]}>{category}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: "#1E293B" },
  chipActive: { backgroundColor: "#22D3EE" },
  label: { color: "#CBD5E1", fontSize: 12, fontWeight: "600" },
  labelActive: { color: "#0B1020" }
});
