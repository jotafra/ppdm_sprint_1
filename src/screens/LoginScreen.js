import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button, Image} from "react-native";
import api from "../axios/axios";
import Logo from "../../assets/logosenai.png"
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    senha: "",
    showPassword: true
  });

  async function handleLogin() {
    await api.postLogin(user).then(
      (response) => {
        Alert.alert("OK", response.data.message);
        navigation.navigate("Init")
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        console.log("erro aq")
      }
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <View style={styles.loginCard}>
        <View style={styles.logoContainer}>
          <Image 
          source={require('../../assets/logosenai.png')} 
          resizeMode="contain"
          style={{width: '100%', height: undefined, aspectRatio: 4}} 
          />
        </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Email"
          value={user.email}
          onChangeText={(value) => {
            setUser({ ...user, email: value });
          }}
        ></TextInput>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          value={user.senha}
          secureTextEntry={user.showPassword}
          onChangeText={(value) => {
            setUser({ ...user, senha: value });
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => setUser({ ...user, showPassword: !user.showPassword })}
        >
          <Ionicons
            name={user.showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>

      </View>
          
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}> Entrar </Text>
          </TouchableOpacity>
          
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não tem cadastro? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
              <Text style={styles.signupLinkText}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
      
      {/* Footer */}
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  logo:{
    width: 270,
    height: 150,
  },
  header: {
    backgroundColor: "#CC1E1E",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  loginCard: {
    backgroundColor: "#CC1E1E",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logoText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    borderRadius: 25,
    marginVertical: 8,
    paddingHorizontal: 15,
  },
  passwordContainer: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    borderRadius: 25,
    marginVertical: 8,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  loginButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#FF3F3F",
    borderRadius: 25,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  signupText: {
    color: "white",
    fontSize: 14,
  },
  signupLinkText: {
    color: "#FF3F3F",
    fontSize: 14,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#CC1E1E",
    width: "100%",
    height: 50,
  },
});