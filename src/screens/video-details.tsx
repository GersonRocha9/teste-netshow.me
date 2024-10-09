import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { Video, ResizeMode } from 'expo-av'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Header } from '../components/header'
import { useVideoById } from '../hooks/useVideoById'
import { CATEGORIES } from '../types/video'

interface VideoDetailsProps {
  route: {
    params: {
      videoId: string
    }
  }
  navigation: any
}

export const VideoDetails = ({ route, navigation }: VideoDetailsProps) => {
  const { videoId } = route.params
  const { video } = useVideoById(videoId)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />

      <View style={styles.container}>
        <Video
          source={{ uri: video?.hls_path as string }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          style={{ width: '100%', aspectRatio: 16 / 9 }}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{video?.title}</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {CATEGORIES[video?.category as keyof typeof CATEGORIES]}
            </Text>
          </View>

          <Text style={styles.description}>{video?.description}</Text>

          <View style={styles.iconContainer}>
            <View style={styles.iconRow}>
              <FontAwesome name="eye" size={16} color="gray" />
              <Text style={styles.iconText}>{video?.views}</Text>
            </View>

            <View style={styles.iconRow}>
              <MaterialIcons name="thumb-up" size={16} color="gray" />
              <Text style={styles.iconText}>{video?.likes}</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
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
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  detailsContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#f0ad4e',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    marginLeft: 5,
    color: 'gray',
  },
  buttonContainer: {
    padding: 10,
  },
})
