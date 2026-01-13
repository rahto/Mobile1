import React from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, SafeAreaView, StatusBar 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function AddPostPetPerdidoScreen2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Logo GPets Superior (Versão Branca para fundo vermelho) */}
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

      {/* Título da Seção e Ícone Fechar */}
      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>Imagem do pet</Text>
        <TouchableOpacity>
          <Ionicons name="close" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {/* Área de Upload (Estilo Tracejado) */}
      <View style={styles.uploadContainer}>
        <View style={styles.dashedOuterBox}>
          <View style={styles.dashedInnerBox}>
            <Text style={styles.uploadMainText}>Imagem</Text>
            <Text style={styles.uploadSubText}>selecione uma imagem</Text>
          </View>
        </View>
      </View>

      {/* Botão Procurar e Status */}
      <View style={styles.procurarRow}>
        <TouchableOpacity style={styles.procurarBtn}>
          <Text style={styles.procurarText}>Procurar</Text>
        </TouchableOpacity>
        <Text style={styles.statusText}>Nenhum arquivo exportado</Text>
      </View>

      {/* Footer: Voltar, Etapa e Próximo */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.voltarBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.stepIndicator}>2/3</Text>

        <TouchableOpacity 
          style={styles.proximoBtn}
          onPress={() => navigation.navigate('AddPostPetPerdidoScreen3')}
        >
          <Text style={styles.btnText}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5F5F', // Vermelho do Pet Perdido
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
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 40,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white', // Texto branco para fundo vermelho
  },
  uploadContainer: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  dashedOuterBox: {
    width: '100%',
    height: 220,
    backgroundColor: '#C5C5FF',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#7A7AFF',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashedInnerBox: {
    width: '85%',
    height: '80%',
    backgroundColor: '#E8E8FF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF00FF',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadMainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B4BFF',
    marginBottom: 5,
  },
  uploadSubText: {
    fontSize: 13,
    color: '#666',
  },
  procurarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 20,
  },
  procurarBtn: {
    backgroundColor: '#2C3E50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  procurarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  statusText: {
    marginLeft: 15,
    fontSize: 12,
    color: 'white', // Texto branco para fundo vermelho
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
    paddingVertical: 14,
    paddingHorizontal: 45,
    borderRadius: 30,
    elevation: 3,
  },
  proximoBtn: {
    backgroundColor: '#52D183', // Verde ligeiramente mais forte para contraste
    paddingVertical: 14,
    paddingHorizontal: 45,
    borderRadius: 30,
    elevation: 3,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepIndicator: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white', // Texto branco para fundo vermelho
  },
});