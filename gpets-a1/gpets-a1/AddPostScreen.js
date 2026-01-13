import React from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, SafeAreaView, StatusBar 
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function AddPostScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Cabeçalho superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer?.() || navigation.goBack()}>
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>
        
        <View style={styles.searchBar}>
                  <Text style={{color:'#555'}}>Pesquisar</Text>
                  <Feather name="search" size={18} color="#333" />
                </View>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileBtn}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/100' }} 
            style={styles.profileImg} 
          />
        </TouchableOpacity>
      </View>

      {/* Conteúdo Central */}
      <View style={styles.mainContent}>
        {/* Logotipo Gpets */}
        <View style={styles.logoWrapper}>
          <Image 
            source={require('./assets/logopreto.png')} // Substitua pela sua imagem local se tiver
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.instructionText}>
          Escolha o tipo{"\n"}de postagem
        </Text>

        {/* Botões de Opção */}
        <TouchableOpacity 
          style={styles.optionButtonBlue}
          onPress={() => navigation.navigate('AddPostPetLocalizado')} // Vai para o novo arquivo
        >
          <Text style={styles.optionButtonText}>Pet localizado</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionButtonRed}
          onPress={() => navigation.navigate('AddPostPetPerdidoScreen')} // Vai para o novo arquivo
        >
          <Text style={styles.optionButtonText}>Pet Perdido</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de Navegação Inferior (Floating Tab) */}
      <View style={styles.bottomNavWrapper}>
        <View style={styles.bottomNav}>
          {/* Feed */}
          <TouchableOpacity onPress={() => navigation.navigate('MainDashboard')}>
            <Ionicons name="globe-outline" size={24} color="white" />
          </TouchableOpacity>
          
          {/* Mapa */}
          <TouchableOpacity onPress={() => navigation.navigate('MainDashboard')}>
            <Ionicons name="location-outline" size={24} color="white" />
          </TouchableOpacity>

          {/* Botão de Adicionar (Ativo nesta tela) */}
          {/*<TouchableOpacity style={styles.addTabActive}>
            <Ionicons name="add" size={30} color="#74C37E" />
          </TouchableOpacity>*/}

          {/* Guia/Salvos */}
          <TouchableOpacity onPress={() => navigation.navigate('MainDashboard')}>
            <Ionicons name="book-outline" size={24} color="white" />
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="log-out-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EFE0', // Cor de fundo bege da imagem
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 15, 
    marginTop: 10 
  },
  searchBar: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: '#FFBD2E', 
    height: 42, 
    borderRadius: 21, 
    marginHorizontal: 10, 
    alignItems: 'center', 
    paddingHorizontal: 15, 
    justifyContent: 'space-between' 
  },
  searchInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10
  },
  searchText: {
    color: '#333',
    fontSize: 14
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginRight: 10
  },
  profileBtn: {
    width: 35,
    height: 35,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  profileImg: {
    width: '100%',
    height: '100%'
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100, // Espaço para a tab bar
  },
  logoWrapper: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  instructionText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 32,
  },
  optionButtonBlue: {
    backgroundColor: '#0A84D6',
    width: '70%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  optionButtonRed: {
    backgroundColor: '#FF7675',
    width: '70%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNavWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#74C37E',
    width: '85%',
    height: 55,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  addTabActive: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  }
});