import { useQuery } from '@tanstack/react-query'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'

import { ThumbnailCard } from '../components/thumbnail-card'
import { getVideos } from '../services/get-videos'
import { VideosResponse } from '../types/video'
import { groupData } from '../utils/group-items'

export const Home = () => {
  const { data: videos = [] } = useQuery<VideosResponse[]>({
    queryKey: ['videos'],
    queryFn: getVideos,
  })

  const groupedItems = groupData(videos, 2)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <FlatList
          data={groupedItems}
          renderItem={({ item }) => <ThumbnailCard item={item} />}
          showsVerticalScrollIndicator={false}
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
