import * as React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type LoginScreenProps = {
  onLoginSuccess?: () => void;
  onSignupSuccess?: () => void;
};

const STATIC_EMAIL = "demo@kutuku.com";
const STATIC_PASSWORD = "12345678";

export function LoginScreen({ onLoginSuccess, onSignupSuccess }: LoginScreenProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const handleLogin = async () => {
    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      setErrorText("Email and password are required.");
      return;
    }

    if (!cleanEmail.includes("@")) {
      setErrorText("Please enter a valid email address.");
      return;
    }

    if (cleanEmail.toLowerCase() !== STATIC_EMAIL || password !== STATIC_PASSWORD) {
      setErrorText("Invalid email or password.");
      return;
    }

    setErrorText("");
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setLoading(false);
    onLoginSuccess?.();
  };

  const handleSignup = () => {
    onSignupSuccess?.();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          style={styles.input}
        />

        {!!errorText && <Text style={styles.error}>{errorText}</Text>}

        <Pressable style={[styles.button, loading && styles.buttonDisabled]} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.buttonText}>Login</Text>}
        </Pressable>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Pressable onPress={handleSignup} disabled={loading}>
            <Text style={styles.signupLink}>Create an account</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  title: {
    color: "#F8FAFC",
    fontSize: 30,
    fontWeight: "800"
  },
  subtitle: {
    color: "#94A3B8",
    marginTop: 6,
    marginBottom: 24,
    fontSize: 14
  },
  form: {
    gap: 12
  },
  input: {
    backgroundColor: "#0F172A",
    borderColor: "#1E293B",
    borderWidth: 1,
    borderRadius: 12,
    color: "#F8FAFC",
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15
  },
  error: {
    color: "#FB7185",
    fontSize: 13
  },
  button: {
    backgroundColor: "#653BE4",
    borderRadius: 12,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4
  },
  buttonDisabled: {
    opacity: 0.6
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700"
    },
  signupText: {
    color: "#94A3B8",
    fontSize: 14,
    textAlign: "center"
  },
  signupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 12
  },
  signupLink: {
    color: "#653BE4",
    fontSize: 14,
    fontWeight: "700"
  }
});