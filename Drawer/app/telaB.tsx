import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/florRosa.png')} />
      <Text style={styles.text}>Doce Fragrância</Text>

      <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          secureTextEntry={true}
        />

      <Link href="/telaC" style={styles.button}>Salvar</Link>
      <StatusBar style="auto" />

      <Link href="/telaA" style={styles.button}>Voltar</Link>
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
    height: 100,
    width: 100,
  },

  input: {
    height: 40,
    margin: 12,
    marginLeft: 30,
    padding: 10,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#ebd8be',
    color: '#7A7A7A',
    borderWidth: 2,
    borderColor: '#7E1717',
    fontSize: 15,
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
