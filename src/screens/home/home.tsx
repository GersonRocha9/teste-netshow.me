import { NavigationProp } from '@react-navigation/native'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'

import { Header } from '../../components/header'
import { ThumbnailCard } from '../../components/thumbnail-card'
import { useGroupedVideos } from '../../hooks/useGroupedVideos'
import { AppStackRoutes } from '../../routes/routes'

import { styles } from './styles'

export const Home = ({
  navigation,
}: {
  navigation: NavigationProp<AppStackRoutes>
}) => {
  const { videos, isLoading } = useGroupedVideos(2)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#EE3966" />
        </View>
      ) : (
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
      )}
    </SafeAreaView>
  )
}
