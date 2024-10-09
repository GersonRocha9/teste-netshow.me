import { Image, StyleSheet, View } from 'react-native'

import NetshowLogo from '../assets/netshow.png'

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={NetshowLogo} style={styles.logo} alt="Netshow.me Logo" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 300,
    height: 50,
  },
})
