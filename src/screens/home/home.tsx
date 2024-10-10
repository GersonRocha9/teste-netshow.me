import { NavigationProp } from '@react-navigation/native'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'

import { Header } from '../../components/header'
import { ThumbnailCard } from '../../components/thumbnail-card'
import { useGetVideosFromApi } from '../../hooks/useGetVideosFromApi'
import { AppStackRoutes } from '../../routes/routes'

import { styles } from './styles'

export const Home = ({
  navigation,
}: {
  navigation: NavigationProp<AppStackRoutes>
}) => {
  const { videos, isLoading } = useGetVideosFromApi()

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
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            numColumns={2}
            data={videos}
            renderItem={({ item, index }) => (
              <ThumbnailCard
                index={index}
                video={item}
                navigation={navigation}
              />
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
