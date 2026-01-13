import React, { useState } from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, SafeAreaView, StatusBar, Alert 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MapComponent from './MapComponent';

export default function AddPostPetLocalizadoScreen3({ navigation, route }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLocationConfirmed, setIsLocationConfirmed] = useState(false);

  // Pegar dados do pet das telas anteriores, se existirem
  const petData = route?.params || {};

  const handleLocationSelect = (coordinate) => {
    setSelectedLocation(coordinate);
    setIsLocationConfirmed(false);
    console.log('Localização selecionada:', coordinate);
  };

  const handleLocationConfirm = (coordinate) => {
    setIsLocationConfirmed(true);
    
    // Criar objeto completo do post
    const postCompleto = {
      ...petData,
      tipo: 'localizado',
      localizacao: coordinate,
      dataCriacao: new Date().toISOString(),
      status: 'ativo'
    };

    console.log('Post criado automaticamente:', postCompleto);

    // Navegar automaticamente para MainDashboard
    navigation.reset({
      index: 0,
      routes: [{ 
        name: 'MainDashboard',
        params: { 
          postCriado: true,
          mensagem: '✅ Post de pet localizado criado com sucesso!',
          postData: postCompleto,
          timestamp: new Date().getTime()
        }
      }],
    });
  };

  const handleLimparLocalizacao = () => {
    Alert.alert('Limpar', 'Deseja limpar a localização selecionada?', [
      { text: 'Cancelar', style: 'cancel' },
      { 
        text: 'Limpar', 
        onPress: () => {
          setSelectedLocation(null);
          setIsLocationConfirmed(false);
        }
      }
    ]);
  };

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
        <TouchableOpacity 
          style={styles.trashBtn}
          onPress={handleLimparLocalizacao}
        >
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Instruções atualizadas */}
      <View style={styles.instructions}>
        <Ionicons name="information-circle" size={24} color="#0A84D6" />
        <Text style={styles.instructionsText}>
          1. Toque no mapa para selecionar a localização{"\n"}
          2. Clique em "Confirmar Localização" para finalizar
        </Text>
      </View>

      {/* Componente de Mapa com botão de confirmação */}
      <MapComponent
        allowMarkerSelection={true}
        onLocationSelect={handleLocationSelect}
        onLocationConfirm={handleLocationConfirm}
        selectedLocation={selectedLocation}
        showConfirmButton={true}
        heightPercentage={0.7} // Aumentei um pouco a altura
      />

      {/* Status da Localização - SIMPLIFICADO */}
      <View style={styles.statusContainer}>
        <View style={styles.statusRow}>
          <Ionicons 
            name="information-circle" 
            size={24} 
            color="#0A84D6" 
          />
          <Text style={styles.statusText}>
            Selecione uma localização e confirme para criar o post
          </Text>
        </View>
        
        {selectedLocation && (
          <View style={styles.selectedLocationBox}>
            <Text style={styles.selectedLocationTitle}>📍 Local selecionado:</Text>
            <Text style={styles.selectedLocationText}>
              {selectedLocation.latitude.toFixed(6)}, {selectedLocation.longitude.toFixed(6)}
            </Text>
          </View>
        )}
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
    height: 80,
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
    marginTop: 10,
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
  instructions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 132, 214, 0.1)',
    marginHorizontal: 25,
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(10, 132, 214, 0.3)',
  },
  instructionsText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#0A84D6',
    flex: 1,
    lineHeight: 20,
  },
  statusContainer: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    elevation: 3,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statusText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  selectedLocationBox: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C8E6C9',
  },
  selectedLocationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D4A27',
    marginBottom: 5,
  },
  selectedLocationText: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'monospace',
  },
});