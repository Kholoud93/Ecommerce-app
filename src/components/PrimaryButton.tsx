import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function PrimaryButton({ label, onPress, disabled = false, loading = false }: PrimaryButtonProps) {
  // TODO: Keep this as the single reusable CTA used in cart and checkout screens.
  const blocked = disabled || loading;

  return (
    <Pressable style={[styles.button, blocked && styles.buttonDisabled]} onPress={onPress} disabled={blocked}>
      {loading ? <ActivityIndicator color="#0B1020" /> : <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // TODO: Align colors and radius with theme.ts once tokens are created.
  button: {
    backgroundColor: "#653BE4",
    borderRadius: 14,
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonDisabled: {
    opacity: 0.45
  },
  label: {
    color: "#0B1020",
    fontSize: 16,
    fontWeight: "800"
  }
});
