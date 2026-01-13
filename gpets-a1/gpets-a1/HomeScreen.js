import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.centerContent}>
        <View style={{ alignItems: "center", marginBottom: 140 }}>
          <Image
            source={require('./assets/logobranco.png')} 
            style={{ width: 179, height: 70, marginBottom: 100 }}
            resizeMode="stretch"
          />
          <Text style={styles.welcomeText}>{"Bem vindo!"}</Text>
        </View>

        <View style={{ alignItems: "center", marginBottom: 80 }}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={{ color: "#4A90E2", fontSize: 16 }}>
              {"Cadastrar"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#F7E9DA", fontSize: 16 }}>
              {"Entrar como"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.footerLink}>{"Sobre nós"}</Text>
          <Text style={styles.footerLink}>{"Precisa de ajuda?"}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
