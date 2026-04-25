import * as React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { products } from "../constants/products";

type TopTab = "home" | "category";
type BottomTab = "home" | "orders" | "favorite" | "profile";

export function HomeScreen() {
  const [topTab, setTopTab] = React.useState<TopTab>("home");
  const [bottomTab, setBottomTab] = React.useState<BottomTab>("home");
  const featured = products.slice(0, 2);
  const categoryCards = products.filter((item) => item.category !== "accessories").slice(0, 4);

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.profileRow}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.greet}>Hi, Jonathan</Text>
              <Text style={styles.subGreet}>Let us buy your style</Text>
            </View>
          </View>
          <View style={styles.headerActions}>
            <Pressable style={styles.iconBtn}>
              <Text style={styles.iconLabel}>⌕</Text>
            </Pressable>
            <Pressable style={styles.iconBtn}>
              <Text style={styles.iconLabel}>♡</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.topTabs}>
          <Pressable style={styles.topTabBtn} onPress={() => setTopTab("home")}>
            <Text style={[styles.topTabText, topTab === "home" && styles.topTabTextActive]}>Home</Text>
            {topTab === "home" ? <View style={styles.topTabLine} /> : null}
          </Pressable>
          <Pressable style={styles.topTabBtn} onPress={() => setTopTab("category")}>
            <Text style={[styles.topTabText, topTab === "category" && styles.topTabTextActive]}>Category</Text>
            {topTab === "category" ? <View style={styles.topTabLine} /> : null}
          </Pressable>
        </View>

        {topTab === "home" ? (
          <>
            <View style={styles.promoCard}>
              <View style={styles.promoAccent} />
              <View style={styles.promoTextWrap}>
                <Text style={styles.promoTitle}>24% off shipping today on bag purchases</Text>
                <Text style={styles.promoSub}>By Kutuku Store</Text>
              </View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>New Arrivals 🔥</Text>
              <Pressable>
                <Text style={styles.sectionLink}>See All</Text>
              </Pressable>
            </View>

            <View style={styles.arrivalsRow}>
              {featured.map((item) => (
                <Pressable key={item.id} style={styles.arrivalCard}>
                  <Image source={{ uri: item.image }} style={styles.arrivalImage} />
                  <Text style={styles.arrivalName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.arrivalBrand}>Kutuku Brands</Text>
                  <Text style={styles.arrivalPrice}>${item.price.toFixed(2)}</Text>
                </Pressable>
              ))}
            </View>
          </>
        ) : (
          <View style={styles.categoryList}>
            {categoryCards.map((item) => (
              <Pressable key={item.id} style={styles.categoryCard}>
                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                <View style={styles.categoryOverlay} />
                <View style={styles.categoryTextWrap}>
                  <Text style={styles.categoryName}>{item.category[0].toUpperCase() + item.category.slice(1)}</Text>
                  <Text style={styles.categoryMeta}>{Math.floor(item.rating * 50)} Product</Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        {[
          { key: "home", label: "Home", icon: "⌂" },
          { key: "orders", label: "My Order", icon: "◫" },
          { key: "favorite", label: "Favorite", icon: "♡" },
          { key: "profile", label: "My Profile", icon: "◌" }
        ].map((item) => {
          const active = bottomTab === item.key;
          return (
            <Pressable key={item.key} style={styles.bottomItem} onPress={() => setBottomTab(item.key as BottomTab)}>
              <Text style={[styles.bottomIcon, active && styles.bottomActive]}>{item.icon}</Text>
              <Text style={[styles.bottomLabel, active && styles.bottomActive]}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { paddingHorizontal: 18, paddingTop: 14, paddingBottom: 110 },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  profileRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#D9D9D9" },
  greet: { color: "#1E1E1E", fontSize: 14, fontWeight: "700" },
  subGreet: { color: "#A3A3A3", fontSize: 11, marginTop: 2 },
  headerActions: { flexDirection: "row", gap: 8 },
  iconBtn: { width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: "#EFEFEF", alignItems: "center", justifyContent: "center" },
  iconLabel: { color: "#6E6E6E", fontSize: 14, fontWeight: "700" },
  topTabs: { flexDirection: "row", justifyContent: "space-around", marginTop: 22, marginBottom: 16 },
  topTabBtn: { alignItems: "center", minWidth: 96, paddingBottom: 10 },
  topTabText: { color: "#B0B0B0", fontSize: 13, fontWeight: "600" },
  topTabTextActive: { color: "#222222" },
  topTabLine: { marginTop: 8, width: 64, height: 2, borderRadius: 2, backgroundColor: "#653BE4" },
  promoCard: { borderRadius: 14, overflow: "hidden", backgroundColor: "#F2F0FF", minHeight: 96, flexDirection: "row", alignItems: "center", marginBottom: 20 },
  promoAccent: { width: 72, height: 72, borderRadius: 36, backgroundColor: "#DCD3FF", marginLeft: -24, marginRight: 6 },
  promoTextWrap: { flex: 1, paddingRight: 14 },
  promoTitle: { color: "#232323", fontSize: 16, fontWeight: "700", lineHeight: 22 },
  promoSub: { color: "#8C8C8C", fontSize: 11, marginTop: 4 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  sectionTitle: { color: "#1F1F1F", fontSize: 19, fontWeight: "800" },
  sectionLink: { color: "#653BE4", fontSize: 12, fontWeight: "700" },
  arrivalsRow: { flexDirection: "row", gap: 12 },
  arrivalCard: { flex: 1, backgroundColor: "#F7F7F7", borderRadius: 14, padding: 8 },
  arrivalImage: { width: "100%", height: 126, borderRadius: 10, backgroundColor: "#EAEAEA" },
  arrivalName: { marginTop: 9, color: "#202020", fontSize: 14, fontWeight: "700" },
  arrivalBrand: { marginTop: 2, color: "#9A9A9A", fontSize: 10 },
  arrivalPrice: { marginTop: 6, color: "#202020", fontSize: 15, fontWeight: "800" },
  categoryList: { gap: 10 },
  categoryCard: { height: 84, borderRadius: 13, overflow: "hidden" },
  categoryImage: { width: "100%", height: "100%" },
  categoryOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.28)" },
  categoryTextWrap: { position: "absolute", left: 14, bottom: 14 },
  categoryName: { color: "#FFFFFF", fontSize: 15, fontWeight: "800" },
  categoryMeta: { color: "#E9E9E9", fontSize: 11, marginTop: 2 },
  bottomNav: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 14,
    height: 64,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  bottomItem: { alignItems: "center", justifyContent: "center", gap: 2, minWidth: 64 },
  bottomIcon: { color: "#B0B0B0", fontSize: 15, fontWeight: "700" },
  bottomLabel: { color: "#B0B0B0", fontSize: 10, fontWeight: "600" },
  bottomActive: { color: "#653BE4" }
});
