import React from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, SafeAreaView, StatusBar 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function AddPostPetPerdidoScreen3({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Logo Superior Branca */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('./assets/logobranco.png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Header Amarelo Padrão */}
      <View style={styles.yellowHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pet Perdido</Text>
        <TouchableOpacity style={styles.trashBtn}>
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Container do Mapa */}
      <View style={styles.mapWrapper}>
        <View style={styles.mapContainer}>
          <Image 
            source={{ uri: 'https://i.stack.imgur.com/vH98r.png' }} 
            style={styles.mapPlaceholder}
          />
          
          {/* Overlay de instrução no mapa */}
          <View style={styles.mapOverlay}>
            <Text style={styles.mapOverlayText}>
              Indique a localização aproximada no mapa
            </Text>
          </View>
        </View>
      </View>

      {/* Footer: Voltar, Etapa 3/3 e Criar Post */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.voltarBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.voltarBtnText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.stepIndicator}>3/3</Text>

        <TouchableOpacity 
          style={styles.criarPostBtn}
          onPress={() => {
            alert('Post de Pet Perdido criado com sucesso!');
            navigation.navigate('MainDashboard');
          }}
        >
          <Text style={styles.btnText}>Criar post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5F5F', // Fundo vermelho para Pet Perdido
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    height: 100,
  },
  logoImage: {
    width: 160,
    height: '100%',
  },
  yellowHeader: {
    backgroundColor: '#FFBD2E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 45,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  trashBtn: {
    backgroundColor: '#FF7675',
    padding: 8,
    borderRadius: 25,
  },
  mapWrapper: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 40,
    marginBottom: 140,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  mapOverlayText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  voltarBtn: {
    backgroundColor: '#F9EFE0', // Cor bege clara para o botão Voltar no tema vermelho
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    minWidth: 120,
    alignItems: 'center',
  },
  voltarBtnText: {
    color: '#FF8A5B', // Cor do texto voltar
    fontWeight: 'bold',
    fontSize: 16,
  },
  criarPostBtn: {
    backgroundColor: '#0078D7', // Azul vibrante para o botão final
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    minWidth: 120,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepIndicator: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});