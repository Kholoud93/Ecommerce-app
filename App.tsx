import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./src/screens/LoginScreen";
import { SignUpScreen } from "./src/screens/SignUpScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ProductDetailsScreen } from "./src/screens/ProductDetailsScreen";
import { CartScreen } from "./src/screens/CartScreen";
import { CheckoutScreen } from "./src/screens/CheckoutScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";

type RouteName = "login" | "signup" | "home" | "product-details" | "cart" | "checkout" | "profile";

export default function App() {
  const [route, setRoute] = React.useState<RouteName>("login");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      {route === "login" ? (
        <LoginScreen onLoginSuccess={() => setRoute("home")}
          onSignupSuccess={() => setRoute("signup")}
        />
      ) : route === "signup" ? (
        <SignUpScreen onSignUpSuccess={() => setRoute("home")} onLoginSuccess={() => setRoute("login")} />
      ) : route === "home" ? (
        <HomeScreen />
      ) : route === "product-details" ? (
        <ProductDetailsScreen />
      ) : route === "cart" ? (
        <CartScreen />
      ) : route === "checkout" ? (
        <CheckoutScreen />
      ) : route === "profile" ? (
        <ProfileScreen />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0B1020" },
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "#F8FAFC", fontSize: 24, fontWeight: "800" }
});