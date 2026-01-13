import React from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, SafeAreaView, StatusBar, Dimensions 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// Nota: Se for usar um mapa real, você precisará instalar o 'react-native-maps'
// Por enquanto, usaremos uma imagem para representar o mapa conforme seu design.

export default function AddPostPetLocalizadoScreen3({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Logo Superior */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('./assets/logopreto.png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Header Amarelo */}
      <View style={styles.yellowHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pet localizado</Text>
        <TouchableOpacity style={styles.trashBtn}>
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Container do Mapa */}
      <View style={styles.mapWrapper}>
        <View style={styles.mapContainer}>
          {/* Aqui entraria o <MapView />. Por enquanto, uma representação: */}
          <Image 
            source={{ uri: 'https://i.stack.imgur.com/vH98r.png' }} // Exemplo de imagem de mapa
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
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.stepIndicator}>3/3</Text>

        <TouchableOpacity 
          style={styles.criarPostBtn}
          onPress={() => {
            alert('Post criado com sucesso!');
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
    backgroundColor: '#F9EFE0',
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
    marginBottom: 140, // Espaço para o footer
  },
  mapContainer: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 30,
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
    backgroundColor: '#FF8A5B',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    minWidth: 120,
    alignItems: 'center',
  },
  criarPostBtn: {
    backgroundColor: '#0078D7', // Azul do botão Criar Post
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
    color: '#333',
  },
});