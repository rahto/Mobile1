import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Telas de autenticação
import HomeScreen from "./HomeScreen";
import CadastroScreen from "./CadastroScreen";
import LoginScreen from "./LoginScreen";
import CadastroPessoaScreen from "./CadastroPessoaScreen";
import CadastroSucessoScreen from "./CadastroSucessoScreen";
import LoginPessoaScreen from "./LoginPessoaScreen";
import AddPostScreen from './AddPostScreen';
import AddPostPetLocalizadoScreen from './AddPostPetLocalizadoScreen';
import AddPostPetLocalizadoScreen2 from './AddPostPetLocalizadoScreen2';
import AddPostPetLocalizadoScreen3 from './AddPostPetLocalizadoScreen3';

// Dashboard principal
import MainDashboard from "./MainDashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false,
          cardStyle: { backgroundColor: '#FFFFFF' }
        }}
        initialRouteName="Home"
      >
        {/* Telas de Autenticação */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ animationEnabled: true }}
        />
        
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen} 
          options={{ 
            animationEnabled: true,
            gestureEnabled: true 
          }}
        />
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
            animationEnabled: true,
            gestureEnabled: true 
          }}
        />
        
        <Stack.Screen 
          name="CadastroPessoa" 
          component={CadastroPessoaScreen} 
          options={{ 
            animationEnabled: true,
            gestureEnabled: true 
          }}
        />
        
        <Stack.Screen 
          name="CadastroSucesso" 
          component={CadastroSucessoScreen} 
          options={{ 
            animationEnabled: true,
            gestureEnabled: true 
          }}
        />
        
        <Stack.Screen 
          name="LoginPessoa" 
          component={LoginPessoaScreen} 
          options={{ 
            animationEnabled: true,
            gestureEnabled: true 
          }}
        />
        
        {/* Dashboard Principal (após login) */}
        <Stack.Screen 
          name="MainDashboard" 
          component={MainDashboard} 
          options={{ 
            animationEnabled: true,
            gestureEnabled: false // Desabilita gesto de voltar no dashboard
          }}
        />

        <Stack.Screen 
          name="AddPost" 
          component={AddPostScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="AddPostPetLocalizado" 
          component={AddPostPetLocalizadoScreen} 
          options={{ 
            headerShown: false, // Remove o cabeçalho automático
            animationEnabled: true // Garante uma transição suave
          }} 
        />

        <Stack.Screen 
          name="AddPostPetLocalizado2" 
          component={AddPostPetLocalizadoScreen2} 
          options={{ 
            headerShown: false, // Remove o cabeçalho automático
            animationEnabled: true // Garante uma transição suave
          }} 
        />

        <Stack.Screen 
          name="AddPostPetLocalizado3" 
          component={AddPostPetLocalizadoScreen3} 
          options={{ 
            headerShown: false, // Remove o cabeçalho automático
            animationEnabled: true // Garante uma transição suave
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}