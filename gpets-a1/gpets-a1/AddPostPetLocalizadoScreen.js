import React from 'react';
import { 
  StyleSheet, View, Text, Image, TextInput, 
  TouchableOpacity, SafeAreaView, StatusBar, ScrollView 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function AddPostPetLocalizadoScreen({ navigation }) {

  // Componente interno para os campos de input (scannable e organizado)
  const FormField = ({ label, placeholder, isDropdown, multiline }) => (
    <View style={[styles.inputContainer, multiline && { height: 120 }]}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput 
          placeholder={placeholder} 
          style={[styles.textInput, multiline && { textAlignVertical: 'top', height: 80 }]}
          placeholderTextColor="#666"
          multiline={multiline}
        />
        {isDropdown && (
          <MaterialIcons name="keyboard-arrow-down" size={28} color="#333" />
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo GPets */}
        <View style={styles.logoBox}>
          <Image 
            source={require('./assets/logopreto.png')} 
            style={styles.logoImg}
            resizeMode="contain"
          />
        </View>

        {/* Banner Amarelo (Cabeçalho do Form) */}
        <View style={styles.yellowBanner}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIconButton}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#333" />
          </TouchableOpacity>
          
          <Text style={styles.bannerTitle}>Pet localizado</Text>
          
          <TouchableOpacity style={styles.trashBtn}>
            <Ionicons name="trash-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Corpo do Formulário */}
        <View style={styles.formSection}>
          <FormField label="Raça" placeholder="Informe a raça" />
          
          <FormField label="Sexo" placeholder="Selecione o sexo" isDropdown />
          
          <FormField label="Tutor" placeholder="O pet possui tutor?" isDropdown />
          
          <FormField label="Data" placeholder="Informe a data que foi visto" isDropdown />
          
          <FormField 
            label="Descrição" 
            placeholder="Informações extras que podem ajudar a identificar o pet" 
            multiline 
          />
        </View>

        {/* Rodapé: Paginação e Botão Próximo */}
        <View style={styles.footerRow}>
          <Text style={styles.stepText}>1/3</Text>
          
          <TouchableOpacity 
            style={styles.greenNextBtn}
            onPress={() => navigation.navigate('AddPostPetLocalizado2')}
            >
            <Text style={styles.btnLabel}>Proximo</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9EFE0', // Cor bege do fundo
  },
  scrollContent: {
    paddingBottom: 50,
  },
  logoBox: {
    alignItems: 'center',
    marginTop: 40,
    height: 80,
  },
  logoImg: {
    width: 160,
    height: '100%',
  },
  yellowBanner: {
    backgroundColor: '#FFBD2E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 45, // Bordas bem arredondadas como na imagem
    elevation: 4,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  trashBtn: {
    backgroundColor: '#FF7675',
    padding: 10,
    borderRadius: 25,
  },
  backIconButton: {
    paddingLeft: 5,
  },
  formSection: {
    paddingHorizontal: 25,
    marginTop: 35,
  },
  inputContainer: {
    backgroundColor: '#C4C4C4', // Cinza médio idêntico à imagem
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#A8A8A8', // Sombra sutil na base
  },
  fieldLabel: {
    fontSize: 12,
    color: '#444',
    marginBottom: 2,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 5,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  stepText: {
    fontSize: 16,
    color: '#555',
    marginRight: 40,
  },
  greenNextBtn: {
    backgroundColor: '#74C37E',
    paddingVertical: 14,
    paddingHorizontal: 45,
    borderRadius: 30,
    elevation: 3,
  },
  btnLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});