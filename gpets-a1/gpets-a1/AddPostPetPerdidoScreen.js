import React from 'react';
import { 
  StyleSheet, View, Text, Image, TextInput, 
  TouchableOpacity, SafeAreaView, StatusBar, ScrollView 
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function AddPostPetPerdidoScreen({ navigation }) {

  const FormField = ({ label, placeholder, isDropdown, multiline }) => (
    <View style={[styles.inputContainer, multiline && { height: 120 }]}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput 
          placeholder={placeholder} 
          style={[styles.textInput, multiline && { textAlignVertical: 'top', height: 80 }]}
          placeholderTextColor="#444"
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
      <StatusBar barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo GPets - Versão Branca para fundo escuro */}
        <View style={styles.logoBox}>
          <Image 
            source={require('./assets/logobranco.png')} // Altere para a versão branca da logo
            style={styles.logoImg}
            resizeMode="contain"
          />
        </View>

        {/* Banner Amarelo */}
        <View style={styles.yellowBanner}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIconButton}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#333" />
          </TouchableOpacity>
          
          <Text style={styles.bannerTitle}>Pet Perdido</Text>
          
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

        {/* Rodapé */}
        <View style={styles.footerRow}>
          <Text style={styles.stepText}>1/3</Text>
          
          <TouchableOpacity 
            style={styles.greenNextBtn}
            onPress={() => navigation.navigate('AddPostPetPerdidoScreen2')}
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
    backgroundColor: '#FF5F5F', // Cor avermelhada do Pet Perdido
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
    backgroundColor: '#FFBD2E', // Mantém o amarelo de destaque
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 45,
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
    backgroundColor: '#C4C4C4', // Cinza dos inputs
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#3D9BE9', // Borda azul de destaque no fundo vermelho
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
    color: '#FFF', // Texto branco para contraste com vermelho
    marginRight: 40,
  },
  greenNextBtn: {
    backgroundColor: '#52D183', // Verde do botão próximo
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