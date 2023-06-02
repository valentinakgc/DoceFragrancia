import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/florRosa.png')} />
      <Text style={styles.text}>Doce Fragrância</Text>
      <Text style={styles.text2}>Seja bem vindo á Doce Fragrância! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non velit vitae orci euismod dictum. Sed magna odio, sollicitudin consectetur sagittis vitae, pulvinar a magna. Donec sed justo tortor.</Text>
      
      <Link href="/telaA" style={styles.button}>Próximo</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 15,
    marginTop: 15,
    textAlign: 'center',
    padding: 5,
  },

  logo: {
    height: 100,
    width: 100,
  },

  button: {
    backgroundColor: '#7E1717',
    color: '#020202',
    padding: 8,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ebd8be',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 15,
  },
});
