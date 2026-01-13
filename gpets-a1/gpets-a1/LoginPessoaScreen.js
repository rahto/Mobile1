import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import styles from "./styles";

export default function LoginPessoaScreen({ navigation }) {
  const [contato, setContato] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarSenha, setLembrarSenha] = useState(false);

  const handleLogin = () => {
    if (!contato || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    // Validação básica do email (opcional)
    if (contato.includes("@") && !contato.includes("@.")) {
      // Validação simples de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contato)) {
        Alert.alert("Erro", "Por favor, insira um e-mail válido");
        return;
      }
    }

    // Aqui você faria a validação com a API/banco de dados
    // Simulando login bem-sucedido
    Alert.alert(
      "Sucesso", 
      "Login realizado com sucesso!", 
      [
        {
          text: "OK",
          onPress: () => {
            // Navegar para o Dashboard após login bem-sucedido
            navigation.navigate("MainDashboard");
          }
        }
      ]
    );
  };

  const handleEsqueciSenha = () => {
    Alert.alert(
      "Recuperar Senha", 
      "Digite seu e-mail para redefinir a senha:",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Enviar", 
          onPress: () => {
            if (contato) {
              Alert.alert("Sucesso", "E-mail de recuperação enviado!");
            } else {
              Alert.alert("Atenção", "Digite seu e-mail primeiro");
            }
          }
        }
      ],
      { cancelable: true }
    );
  };

  const handleCadastro = () => {
    navigation.navigate("CadastroPessoa");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={{ fontSize: 20, color: "#2D4A27" }}>{"←"}</Text>
      </TouchableOpacity>

      <ScrollView 
        contentContainerStyle={styles.centerContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo (opcional) */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/jURUpFj1d0/e0durvln_expires_30_days.png" }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Título */}
        <Text style={styles.title}>{"Login - Pessoa Física"}</Text>
        <Text style={styles.subtitle}>{"Acesse sua conta"}</Text>

        {/* Formulário */}
        <View style={styles.formContainer}>
          {/* Campo Contato */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contato:</Text>
            <Text style={styles.sublabel}>E-mail ou número</Text>
            <TextInput
              style={styles.input}
              placeholder="exemplo@email.com"
              placeholderTextColor="#909090"
              value={contato}
              onChangeText={setContato}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Campo Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha:</Text>
            <Text style={styles.sublabel}>Digite sua senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#909090"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          {/* Opções: Lembrar senha e Esqueci senha */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.lembrarContainer}
              onPress={() => setLembrarSenha(!lembrarSenha)}
            >
              <View style={styles.checkbox}>
                {lembrarSenha && <View style={styles.checkboxInner} />}
              </View>
              <Text style={styles.lembrarText}>Lembrar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.esqueciSenha}
              onPress={handleEsqueciSenha}
            >
              <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          {/* Botão de Login */}
          <TouchableOpacity
            style={[styles.btnAction, { marginTop: 30 }, {marginLeft: 64}]}
            onPress={handleLogin}
          >
            <Text style={styles.btnText}>{"Entrar"}</Text>
          </TouchableOpacity>

          {/* Divisor */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.divider} />
          </View>

          {/* Link para Cadastro */}
          <View style={styles.registroContainer}>
            <Text style={styles.registroText}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={handleCadastro}>
              <Text style={styles.registroLink}> Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          {/* Login Social (opcional) */}
          <View style={styles.socialContainer}>
            <Text style={styles.socialText}>Entrar com:</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>f</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}