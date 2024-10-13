import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Header } from './header'

export const ErrorComponent = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Algo deu errado.</Text>

        <Text style={styles.text}>
          Certifique-se de que o JSON Server está rodando.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#EE3966',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
})
