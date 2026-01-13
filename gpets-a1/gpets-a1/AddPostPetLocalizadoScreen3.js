import React, { useState } from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, SafeAreaView, StatusBar, Alert 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MapComponent from './MapComponent'; // Importe o componente

export default function AddPostPetLocalizadoScreen3({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (coordinate) => {
    setSelectedLocation(coordinate);
    console.log('Localização selecionada:', coordinate);
  };

  const handleCreatePost = () => {
    if (!selectedLocation) {
      Alert.alert('Atenção', 'Por favor, selecione uma localização no mapa.');
      return;
    }

    Alert.alert(
      'Confirmação',
      `Deseja criar o post na localização selecionada?\nLat: ${selectedLocation.latitude.toFixed(4)}\nLon: ${selectedLocation.longitude.toFixed(4)}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Criar Post', 
          onPress: () => {
            // Aqui você enviaria os dados para a API
            Alert.alert('Sucesso', 'Post criado com sucesso!');
            navigation.navigate('MainDashboard');
          }
        }
      ]
    );
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
          onPress={() => {
            Alert.alert('Limpar', 'Deseja limpar todos os dados do formulário?', [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Limpar', onPress: () => setSelectedLocation(null) }
            ]);
          }}
        >
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Instruções */}
      <View style={styles.instructions}>
        <Ionicons name="information-circle" size={24} color="#0A84D6" />
        <Text style={styles.instructionsText}>
          Toque no mapa para marcar onde o pet foi localizado
        </Text>
      </View>

      {/* Componente de Mapa */}
      <MapComponent
        allowMarkerSelection={true}
        onLocationSelect={handleLocationSelect}
        selectedLocation={selectedLocation}
        heightPercentage={0.6}
      />

      {/* Informações da localização selecionada */}
      {selectedLocation && (
        <View style={styles.locationInfo}>
          <Text style={styles.locationTitle}>Localização selecionada:</Text>
          <Text style={styles.locationCoords}>
            Lat: {selectedLocation.latitude.toFixed(6)}
          </Text>
          <Text style={styles.locationCoords}>
            Lon: {selectedLocation.longitude.toFixed(6)}
          </Text>
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.voltarBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.stepIndicator}>3/3</Text>

        <TouchableOpacity 
          style={[
            styles.criarPostBtn, 
            !selectedLocation && { backgroundColor: '#CCCCCC' }
          ]}
          onPress={handleCreatePost}
          disabled={!selectedLocation}
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
  },
  locationInfo: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    elevation: 3,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  locationCoords: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 30,
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
    backgroundColor: '#0078D7',
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