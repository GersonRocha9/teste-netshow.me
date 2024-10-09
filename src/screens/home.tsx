import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'

import { Header } from '../components/header'
import { ThumbnailCard } from '../components/thumbnail-card'
import { useGroupedVideos } from '../hooks/useGroupedVideos'

interface HomeProps {
  navigation: any
}

export const Home = ({ navigation }: HomeProps) => {
  const { videos } = useGroupedVideos(2)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />

      <View style={styles.container}>
        <FlatList
          data={videos}
          renderItem={({ item }) => (
            <ThumbnailCard item={item} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          refreshing
        />
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
    paddingHorizontal: 10,
  },
})
