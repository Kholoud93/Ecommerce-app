import * as React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type SignUpScreenProps = {
  onSignUpSuccess?: () => void;
  onLoginSuccess?: () => void;
};

export function SignUpScreen({ onSignUpSuccess, onLoginSuccess }: SignUpScreenProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleSignup = async () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      setErrorText("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorText("Passwords do not match.");
      return;
    }

    setErrorText("");
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setLoading(false);
    onSignUpSuccess?.();
  };

  const handleLogin = () => {
    onLoginSuccess?.();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>Create an account to continue</Text>

      <View style={styles.form}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="#94A3B8"
          keyboardType="default"
          autoCapitalize="none"
          style={styles.input}
        />

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
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
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
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          style={styles.input}
        />

        {!!errorText && <Text style={styles.error}>{errorText}</Text>}

        <Pressable style={[styles.button, loading && styles.buttonDisabled]} onPress={handleSignup} disabled={loading}>
          {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.buttonText}>Create Account</Text>}
        </Pressable>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <Pressable onPress={handleLogin} disabled={loading}>
            <Text style={styles.loginLink}>Login</Text>
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
  loginText: {
    color: "#94A3B8",
    fontSize: 14,
    textAlign: "center"
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 12
  },
  loginLink: {
    color: "#653BE4",
    fontSize: 14,
    fontWeight: "700"
  }
});