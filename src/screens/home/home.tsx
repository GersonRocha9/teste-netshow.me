import { ErrorComponent, Header, ThumbnailCard } from '@components'
import { useGetVideosFromApi } from '@hooks'
import { NavigationProp } from '@react-navigation/native'
import { AppStackRoutes } from '@routes'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'

import { styles } from './styles'

export const Home = ({
  navigation,
}: {
  navigation: NavigationProp<AppStackRoutes>
}) => {
  const { videos, isLoading, isError, error } = useGetVideosFromApi()

  if (isError) {
    console.error(error?.message)
  }

  if (error) {
    return <ErrorComponent />
  }

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
