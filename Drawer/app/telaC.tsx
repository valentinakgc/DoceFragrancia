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



      <Link href="/" style={styles.button}>Home</Link>
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
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },

  logo: {
    height: 60,
    width: 60,
  },

  button: {
    backgroundColor: '#7E1717',
    color: '#FFE5CA',
    padding: 8,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Times New Roman',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
    elevation: 5,
  },

  imagem1: {
    height: 145,
    width: 145,
    marginTop: 20,
    marginRight: 160,
  },

  imagem2: {
    height: 145,
    width: 145,
    marginTop: -145,
    marginLeft: 160,
  },

  imagem3: {
    height: 145,
    width: 145,
    marginTop: 15,
    marginRight: 160,
  },

  imagem4: {
    height: 145,
    width: 145,
    marginTop: -145,
    marginLeft: 160,
  },

  imagem5: {
    height: 145,
    width: 145,
    marginTop: 15,
    marginRight: 160,
  },

  imagem6: {
    height: 145,
    width: 145,
    marginTop: -145,
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
