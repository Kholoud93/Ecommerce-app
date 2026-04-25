import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ScreenHeaderProps = {
  title: string;
  rightLabel?: string;
  onRightPress?: () => void;
};

export function ScreenHeader({ title, rightLabel, onRightPress }: ScreenHeaderProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {rightLabel ? (
        <Pressable style={styles.rightBtn} onPress={onRightPress}>
          {/* TODO: Replace label with icon + count badge from Figma. */}
          <Text style={styles.rightText}>{rightLabel}</Text>
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { color: "#F8FAFC", fontSize: 24, fontWeight: "800" },
  rightBtn: { backgroundColor: "#1E293B", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  rightText: { color: "#F8FAFC", fontWeight: "700" }
});
