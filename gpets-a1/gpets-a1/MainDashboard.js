import React, { useState } from 'react'; 
import { 
  StyleSheet, View, Text, Image, ScrollView, 
  TouchableOpacity, SafeAreaView, StatusBar, Dimensions 
} from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// --- COMPONENTE: MENU LATERAL ---
const SideMenu = ({ onClose, onNavigate, currentScreen, onNewPost }) => (
  <View style={styles.overlay}>
    <SafeAreaView style={styles.menuContainer}>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <Ionicons name="close" size={28} color="#2D4A27" />
      </TouchableOpacity>

      <View style={styles.menuItemsList}>
        <TouchableOpacity 
          style={[styles.menuItem, currentScreen === 'map' && styles.activeMenuItem]} 
          onPress={() => onNavigate('map')}
        >
          <Ionicons name="location-outline" size={22} color="#2D4A27" />
          <Text style={styles.menuLabel}>Mapa Aberto</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, currentScreen === 'feed' && styles.activeMenuItem]} 
          onPress={() => onNavigate('feed')}
        >
          <Ionicons name="home-outline" size={22} color="#2D4A27" />
          <Text style={styles.menuLabel}>Feed</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, currentScreen === 'guide' && styles.activeMenuItem]} 
          onPress={() => onNavigate('guide')}
        >
          <Ionicons name="book-outline" size={22} color="#2D4A27" />
          <Text style={styles.menuLabel}>Guia de Saúde</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="options-outline" size={22} color="#2D4A27" />
          <Text style={styles.menuLabel}>Filtro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="chatbubble-outline" size={22} color="#2D4A27" />
          <Text style={styles.menuLabel}>Mensagens</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={22} color="#2D4A27" />
          <Text style={styles.menuLabel}>Configuração</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.newPostBtnMenu} 
        onPress={onNewPost}
      >
        <Ionicons name="add" size={20} color="white" />
        <Text style={styles.newPostText}>Nova Publicação</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
    <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
  </View>
);

// --- COMPONENTE: TELA DE FEED ---
const FeedView = () => (
  <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
    {[1, 2, 3].map((id) => (
      <View key={id} style={styles.feedCard}>
        <View style={styles.cardHeader}>
          <View style={styles.userRow}>
            <View style={styles.avatarCircle}><Text style={styles.avatarInitial}>A</Text></View>
            <View>
              <Text style={styles.userName}>Alex Silva</Text>
              <Text style={styles.userStatus}>Cachorro perdido</Text>
            </View>
          </View>
          <MaterialIcons name="more-vert" size={24} color="#666" />
        </View>
        
        <View style={styles.imageWrapper}>
          <Image source={{ uri: `https://placedog.net/500/300?id=${id + 10}` }} style={styles.petImage} />
          {id === 2 && (
            <TouchableOpacity style={styles.eyeOverlay}>
              <Ionicons name="eye-outline" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.locationTitle}>Quixadá</Text>
          <Text style={styles.dateLabel}>14/10/2025</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
          </Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.btnShare}>
              <Text style={styles.txtShare}>Compartilhar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGoMap}>
              <Text style={styles.txtGoMap}>ir para mapa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ))}
  </ScrollView>
);

// --- COMPONENTE: TELA DE MAPA ---
const MapaView = () => (
  <View style={styles.mapContainer}>
    <View style={styles.legendRow}>
      <View style={styles.legendItem}>
        <Ionicons name="location" size={16} color="#0A84D6" />
        <Text style={styles.legendTxt}>Pet Localizado</Text>
      </View>
      <View style={styles.legendItem}>
        <Ionicons name="location" size={16} color="#FF7675" />
        <Text style={styles.legendTxt}>Pet Perdido</Text>
      </View>
      <View style={styles.legendItem}>
        <Ionicons name="location" size={16} color="#FFBD2E" />
        <Text style={styles.legendTxt}>ONGs</Text>
      </View>
    </View>
    <View style={styles.mapBorder}>
      <Image source={{ uri: 'https://i.imgur.com/8uO0CgV.png' }} style={styles.mapFull} />
      <TouchableOpacity style={styles.mapEyeBtn}>
        <Ionicons name="eye-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

// --- COMPONENTE: TELA DE GUIA ---
const GuiaView = () => (
  <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
    <View style={styles.guideSelection}>
      <Ionicons name="medical-outline" size={24} color="#0A84D6" />
      <Text style={styles.guideHeaderTxt}>Saúde Animal</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="#333" />
    </View>
    
    <View style={styles.infoBox}>
      <View style={styles.infoBoxHeader}>
        <Feather name="edit-3" size={18} color="#333" />
        <Text style={styles.infoBoxTitle}>Calendário de Vacinas</Text>
      </View>
      <View style={styles.badgeBlack}>
        <Text style={styles.badgeText}>Cães</Text>
      </View>
      <Text style={styles.guideBullet}>• <Text style={{fontWeight:'bold'}}>V8 ou V10:</Text> 3 doses (45, 66 e 87 dias de vida)</Text>
      <Text style={styles.guideBullet}>• <Text style={{fontWeight:'bold'}}>Antirrábica:</Text> Após 4 meses de idade</Text>
    </View>

    <View style={styles.warningBox}>
      <View style={{flexDirection:'row', marginBottom: 5}}>
        <MaterialIcons name="info-outline" size={20} color="#333" />
        <Text style={{fontWeight:'bold', marginLeft: 8}}>Em caso de emergência</Text>
      </View>
      <Text style={styles.warningTxt}>Se seu pet apresentar sintomas graves, procure um veterinário 24h.</Text>
    </View>
  </ScrollView>
);

// --- COMPONENTE PRINCIPAL DO DASHBOARD ---
export default function MainDashboard({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screen, setScreen] = useState('feed');

  const handleNavigate = (target) => {
    setScreen(target);
    setMenuOpen(false);
  };

  const handleNewPost = () => {
    setMenuOpen(false); // Fecha o menu lateral
    navigation.navigate('AddPost'); // Navega para a tela de postagem
  };
  // Função para sair/logout
  const handleLogout = () => {
    // Fechar menu primeiro
    setMenuOpen(false);
    // Navegar de volta para a tela inicial após um breve delay
    setTimeout(() => {
      navigation.navigate('Home');
    }, 300);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {menuOpen && (
        <SideMenu 
          onClose={() => setMenuOpen(false)} 
          onNavigate={handleNavigate} 
          currentScreen={screen} 
          onNewPost={handleNewPost}
        />
      )}

      {/* Cabeçalho */}
      <View style={styles.mainHeader}>
        <TouchableOpacity onPress={() => setMenuOpen(true)}>
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Text style={{color:'#555'}}>Pesquisar</Text>
          <Feather name="search" size={18} color="#333" />
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileHead}>
          <Image source={{uri:'https://i.pravatar.cc/100'}} style={{width:'100%', height:'100%'}}/>
        </TouchableOpacity>
      </View>

      {/* Conteúdo principal baseado na tela selecionada */}
      {screen === 'feed' && <FeedView />}
      {screen === 'map' && <MapaView />}
      {screen === 'guide' && <GuiaView />}

      {/* Barra de navegação inferior */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity 
          onPress={() => setScreen('feed')} 
          style={[styles.tabButton, screen === 'feed' && styles.tabActive]}
        >
          <Ionicons name="globe-outline" size={24} color={screen === 'feed' ? "#74C37E" : "white"} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setScreen('map')} 
          style={[styles.tabButton, screen === 'map' && styles.tabActive]}
        >
          <Ionicons name="location-outline" size={24} color={screen === 'map' ? "#74C37E" : "white"} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setScreen('guide')} 
          style={[styles.tabButton, screen === 'guide' && styles.tabActive]}
        >
          <Ionicons name="book-outline" size={24} color={screen === 'guide' ? "#74C37E" : "white"} />
        </TouchableOpacity>
        
        {/* Botão de Logout/Sair */}
        <TouchableOpacity 
          onPress={handleLogout}
          style={styles.logoutButton}
        >
          <Ionicons name="log-out-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F9EFE0' 
  },
  
  // Cabeçalho
  mainHeader: { 
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
  profileHead: { 
    width: 35, 
    height: 35, 
    borderRadius: 18, 
    overflow: 'hidden', 
    marginLeft: 5 
  },

  // Estilos do Feed
  feedCard: { 
    backgroundColor: 'white', 
    margin: 15, 
    borderRadius: 20, 
    overflow: 'hidden', 
    elevation: 2 
  },
  cardHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 12, 
    alignItems: 'center' 
  },
  userRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  avatarCircle: { 
    width: 36, 
    height: 36, 
    borderRadius: 18, 
    backgroundColor: '#F3E5AB', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 10 
  },
  avatarInitial: { 
    color: '#D4AF37', 
    fontWeight: 'bold' 
  },
  userName: { 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  userStatus: { 
    fontSize: 11, 
    color: '#9E9E9E' 
  },
  imageWrapper: { 
    position: 'relative' 
  },
  petImage: { 
    width: '100%', 
    height: 200 
  },
  eyeOverlay: { 
    position: 'absolute', 
    right: 15, 
    top: '40%', 
    backgroundColor: '#5A9BD5', 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 2, 
    borderColor: 'white' 
  },
  cardContent: { 
    padding: 15 
  },
  locationTitle: { 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  dateLabel: { 
    fontSize: 11, 
    color: '#9E9E9E', 
    marginBottom: 8 
  },
  descriptionText: { 
    fontSize: 13, 
    color: '#4A4A4A', 
    lineHeight: 18 
  },
  actionButtons: { 
    flexDirection: 'row', 
    marginTop: 15, 
    justifyContent: 'space-between' 
  },
  btnShare: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#A5D6A7', 
    borderRadius: 20, 
    paddingVertical: 10, 
    marginRight: 5, 
    alignItems: 'center' 
  },
  txtShare: { 
    color: '#74C37E', 
    fontWeight: 'bold', 
    fontSize: 13 
  },
  btnGoMap: { 
    flex: 1, 
    backgroundColor: '#0A84D6', 
    borderRadius: 20, 
    paddingVertical: 10, 
    marginLeft: 5, 
    alignItems: 'center' 
  },
  txtGoMap: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 13 
  },

  // Estilos do Mapa
  mapContainer: { 
    flex: 1, 
    paddingHorizontal: 15 
  },
  legendRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 12 
  },
  legendItem: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  legendTxt: { 
    fontSize: 10, 
    marginLeft: 4, 
    fontWeight: '500' 
  },
  mapBorder: { 
    flex: 0.85, 
    borderRadius: 45, 
    borderWidth: 2, 
    borderColor: '#000', 
    overflow: 'hidden' 
  },
  mapFull: { 
    width: '100%', 
    height: '100%' 
  },
  mapEyeBtn: { 
    position: 'absolute', 
    bottom: 20, 
    right: 20, 
    backgroundColor: '#0A84D6', 
    width: 54, 
    height: 54, 
    borderRadius: 27, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  // Estilos do Menu Lateral
  overlay: { 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    flexDirection: 'row', 
    zIndex: 2000 
  },
  menuContainer: { 
    width: width * 0.75, 
    backgroundColor: '#74C37E', 
    height: '100%', 
    padding: 20 
  },
  closeBtn: { 
    alignSelf: 'flex-end', 
    marginBottom: 20 
  },
  menuItemsList: { 
    flex: 1 
  },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 5 
  },
  activeMenuItem: { 
    backgroundColor: 'rgba(255,255,255,0.2)' 
  },
  menuLabel: { 
    marginLeft: 15, 
    fontSize: 16, 
    color: '#2D4A27', 
    fontWeight: '500' 
  },
  newPostBtnMenu: { 
    backgroundColor: '#3D4D3D', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 15, 
    borderRadius: 15, 
    marginBottom: 30 
  },
  newPostText: { 
    color: 'white', 
    fontWeight: 'bold', 
    marginLeft: 10 
  },

  // Estilos do Guia
  guideSelection: { 
    backgroundColor: 'white', 
    margin: 15, 
    padding: 15, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  guideHeaderTxt: { 
    marginLeft: 10, 
    flex: 1, 
    fontWeight: '500' 
  },
  infoBox: { 
    backgroundColor: 'white', 
    marginHorizontal: 15, 
    padding: 15, 
    borderRadius: 15, 
    marginBottom: 15 
  },
  infoBoxHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  infoBoxTitle: { 
    fontWeight: 'bold', 
    marginLeft: 10 
  },
  badgeBlack: { 
    backgroundColor: '#000', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 8, 
    alignSelf: 'flex-start', 
    marginBottom: 10 
  },
  badgeText: { 
    color: 'white', 
    fontSize: 11, 
    fontWeight: 'bold' 
  },
  guideBullet: { 
    fontSize: 13, 
    color: '#333', 
    marginBottom: 5 
  },
  warningBox: { 
    margin: 15, 
    padding: 15, 
    borderRadius: 12, 
    borderWidth: 1.5, 
    borderColor: '#FF7675' 
  },
  warningTxt: { 
    fontSize: 12, 
    color: '#666', 
    marginTop: 5 
  },

  // Barra de navegação inferior
  bottomTabBar: { 
    position: 'absolute', 
    bottom: 25, 
    left: 20, 
    right: 20, 
    height: 60, 
    backgroundColor: '#74C37E', 
    borderRadius: 30, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around',
    paddingHorizontal: 10
  },
  tabButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabActive: { 
    backgroundColor: 'white', 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  logoutButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});