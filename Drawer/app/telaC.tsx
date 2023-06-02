import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/florRosa.png')} />
      <Text style={styles.text}>Doce Fragrância</Text>
      <Image style={styles.imagem1} source={require('../assets/MissDior.jpg')} />
      <Image style={styles.imagem2} source={require('../assets/LaVieBelle.jpg')} />
      <Image style={styles.imagem3} source={require('../assets/scandal.webp')} />
      <Image style={styles.imagem4} source={require('../assets/chanelM.jpg')} />
      <Image style={styles.imagem5} source={require('../assets/jadore.webp')} />
      <Image style={styles.imagem6} source={require('../assets/GoodGirl.webp')} />
      <Image style={styles.imagem7} source={require('../assets/poison.webp')} />
      <Image style={styles.imagem8} source={require('../assets/olympea.jpg')} />



      <Link href="/">Voltar para Tela Principal</Link>
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

  logo: {
    height: 70,
    width: 70,
  },

  imagem1: {
    height: 150,
    width: 150,
    marginTop: 20,
    marginRight: 160,
  },

  imagem2: {
    height: 150,
    width: 150,
    marginTop: -150,
    marginLeft: 160,
  },

  imagem3: {
    height: 150,
    width: 150,
    marginTop: 15,
    marginRight: 160,
  },

  imagem4: {
    height: 150,
    width: 150,
    marginTop: -150,
    marginLeft: 160,
  },

  imagem5: {
    height: 150,
    width: 150,
    marginTop: 15,
    marginRight: 160,
  },

  imagem6: {
    height: 150,
    width: 150,
    marginTop: -150,
    marginLeft: 160,
  },

  imagem7: {
    height: 150,
    width: 150,
    marginTop: 15,
    marginRight: 160,
  },

  imagem8: {
    height: 150,
    width: 150,
    marginTop: -150,
    marginLeft: 160,
  },
});