import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import styles from "./styles";

export default function CadastroPessoaScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = () => {
    if (!nome || !contato || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    // Navegar para a página de sucesso
    navigation.navigate("CadastroSucesso");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={{ fontSize: 20 }}>{"←"}</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.centerContent}>
        <Text style={styles.title}>{"Cadastro de Pessoa Física"}</Text>
        <Text style={styles.subtitle}>{"Crie sua conta"}</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.sublabel}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#909090"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Contato:</Text>
          <Text style={styles.sublabel}>E-mail ou número</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@email.com"
            placeholderTextColor="#909090"
            value={contato}
            onChangeText={setContato}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Senha:</Text>
          <Text style={styles.sublabel}>Digite sua senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Mínimo 8 caracteres"
            placeholderTextColor="#909090"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <Text style={styles.label}>Confirmar senha:</Text>
          <Text style={styles.sublabel}>Digite sua senha novamente</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a senha novamente"
            placeholderTextColor="#909090"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.btnAction, { marginTop: 30 }, {marginLeft: 120}]}
            onPress={handleCadastro}
          >
            <Text style={styles.btnText}>{"Confirmar"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}