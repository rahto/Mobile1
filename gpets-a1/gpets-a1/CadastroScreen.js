import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function CadastroScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={{ fontSize: 20 }}>{"←"}</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.centerContent}>
        <Image
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/jURUpFj1d0/yz1jxomk_expires_30_days.png" }}
          resizeMode="stretch"
        />

        <Text style={[styles.title, { marginTop: 100 }]}>{"BEM VINDO AO GPETS!"}</Text>
        <Text style={[styles.subtitle, { marginTop: 0 }]}>{"Escolha a forma de cadastro:"}</Text>

        <TouchableOpacity 
          style={[styles.btnAction, { marginTop: 50 }]} // Adiciona 20 de margem superior
          onPress={() => navigation.navigate("CadastroPessoa")}
        >
          <Text style={styles.btnText}>{"Pessoa Física"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnGray, { marginTop: 0 }]}>
          <Text style={styles.btnText}>{"ONG"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}