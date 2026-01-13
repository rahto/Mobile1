import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const MapComponent = ({ 
  initialRegion = null, 
  markers = [], 
  onMarkerPress = null,
  onLocationSelect = null,
  showUserLocation = true,
  allowMarkerSelection = false,
  selectedLocation = null,
  mapType = "standard",
  heightPercentage = 0.7
}) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState(
    initialRegion || {
      latitude: -4.9692, // Quixadá-CE
      longitude: -39.0558,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  );
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [tempMarker, setTempMarker] = useState(selectedLocation);

  // Solicitar permissão e obter localização do usuário
  useEffect(() => {
    (async () => {
      if (showUserLocation) {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão necessária', 'Permita o acesso à localização para usar o mapa.');
          setLoading(false);
          return;
        }

        try {
          let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
          });
          const { latitude, longitude } = location.coords;
          setUserLocation({ latitude, longitude });
          
          // Se não houver região inicial, usa a localização do usuário
          if (!initialRegion) {
            setRegion({
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }
        } catch (error) {
          console.error('Erro ao obter localização:', error);
        }
      }
      setLoading(false);
    })();
  }, [showUserLocation]);

  // Função para ir para a localização do usuário
  const goToUserLocation = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        ...userLocation,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }, 1000);
    } else {
      Alert.alert('Localização', 'Ative a localização para usar esta função.');
    }
  };

  // Função para lidar com toque no mapa
  const handleMapPress = (event) => {
    if (allowMarkerSelection && onLocationSelect) {
      const { coordinate } = event.nativeEvent;
      setTempMarker(coordinate);
      onLocationSelect(coordinate);
    }
  };

  // Função para lidar com pressão no marcador
  const handleMarkerPress = (marker) => {
    if (onMarkerPress) {
      onMarkerPress(marker);
    }
    setSelectedMarker(marker.id);
  };

  // Renderizar marcadores personalizados
  const renderMarker = (marker) => {
    let iconName = 'paw';
    let color = '#0A84D6'; // Azul padrão para pet localizado
    
    if (marker.type === 'perdido') {
      iconName = 'alert-circle';
      color = '#FF7675'; // Vermelho para pet perdido
    } else if (marker.type === 'ong') {
      iconName = 'home';
      color = '#FFBD2E'; // Amarelo para ONG
    } else if (marker.type === 'user') {
      iconName = 'person';
      color = '#74C37E'; // Verde para usuário
    }

    return (
      <Marker
        key={marker.id}
        coordinate={marker.coordinate}
        title={marker.title}
        description={marker.description}
        onPress={() => handleMarkerPress(marker)}
        pinColor={color}
      >
        <View style={[styles.customMarker, { backgroundColor: color }]}>
          <Ionicons name={iconName} size={20} color="white" />
        </View>
      </Marker>
    );
  };

  if (loading) {
    return (
      <View style={[styles.container, { height: height * heightPercentage }]}>
        <ActivityIndicator size="large" color="#74C37E" />
        <Text style={styles.loadingText}>Carregando mapa...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { height: height * heightPercentage }]}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={setRegion}
        onPress={handleMapPress}
        showsUserLocation={showUserLocation}
        showsMyLocationButton={false}
        showsCompass={true}
        zoomEnabled={true}
        scrollEnabled={true}
        rotateEnabled={true}
        mapType={mapType}
      >
        {/* Marcadores do array */}
        {markers.map(renderMarker)}
        
        {/* Marcador temporário para seleção */}
        {tempMarker && (
          <Marker coordinate={tempMarker}>
            <View style={[styles.customMarker, styles.selectedMarker]}>
              <Ionicons name="location" size={24} color="white" />
            </View>
            <Circle
              center={tempMarker}
              radius={100}
              strokeWidth={2}
              strokeColor="rgba(116, 195, 126, 0.5)"
              fillColor="rgba(116, 195, 126, 0.2)"
            />
          </Marker>
        )}
        
        {/* Localização do usuário (se disponível) */}
        {userLocation && showUserLocation && (
          <Circle
            center={userLocation}
            radius={50}
            strokeWidth={1}
            strokeColor="rgba(0, 120, 215, 0.8)"
            fillColor="rgba(0, 120, 215, 0.2)"
          />
        )}
      </MapView>

      {/* Botões de controle */}
      <View style={styles.controls}>
        <TouchableOpacity 
          style={styles.controlButton} 
          onPress={goToUserLocation}
        >
          <Ionicons name="locate" size={24} color="#0A84D6" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={() => {
            if (mapRef.current) {
              mapRef.current.animateToRegion({
                ...region,
                latitudeDelta: region.latitudeDelta / 2,
                longitudeDelta: region.longitudeDelta / 2,
              }, 500);
            }
          }}
        >
          <Ionicons name="add" size={24} color="#0A84D6" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={() => {
            if (mapRef.current) {
              mapRef.current.animateToRegion({
                ...region,
                latitudeDelta: region.latitudeDelta * 2,
                longitudeDelta: region.longitudeDelta * 2,
              }, 500);
            }
          }}
        >
          <Ionicons name="remove" size={24} color="#0A84D6" />
        </TouchableOpacity>
      </View>

      {/* Legenda */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#0A84D6' }]} />
          <Text style={styles.legendText}>Pet Localizado</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF7675' }]} />
          <Text style={styles.legendText}>Pet Perdido</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FFBD2E' }]} />
          <Text style={styles.legendText}>ONGs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  controls: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    padding: 8,
    flexDirection: 'column',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  controlButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    elevation: 3,
  },
  legend: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333',
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  selectedMarker: {
    backgroundColor: '#74C37E',
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
});

export default MapComponent;