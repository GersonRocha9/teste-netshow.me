import { Header, VideoLoading } from '@components'
import { QUERY_KEYS } from '@constants'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useVideoById } from '@hooks'
import { useFocusEffect } from '@react-navigation/native'
import { updateVideoField } from '@services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { VideoDetailsProps, CATEGORIES } from '@types'
import { convertDate } from '@utils'
import { Video, ResizeMode } from 'expo-av'
import { useCallback, useState, useRef } from 'react'
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { styles } from './styles'

export const VideoDetails = ({ route, navigation }: VideoDetailsProps) => {
  const queryClient = useQueryClient()
  const { videoId } = route.params
  const { video } = useVideoById(videoId)
  const [isLoading, setIsLoading] = useState(true)
  const hasFocusedRef = useRef(false)

  const updatedVideoMutation = useMutation({
    mutationFn: (action: 'likes' | 'views') =>
      updateVideoField(
        videoId,
        action,
        action === 'likes'
          ? (video?.likes as number)
          : (video?.views as number),
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.VIDEO_INFO, videoId],
      })
    },
  })

  useFocusEffect(
    useCallback(() => {
      if (!hasFocusedRef.current) {
        updatedVideoMutation.mutate('views')
        hasFocusedRef.current = true
      }
    }, [videoId, video?.views]),
  )

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />

      <View style={styles.container}>
        {isLoading && <VideoLoading />}

        <Video
          source={{ uri: video?.hls_path as string }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          style={styles.video}
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{video?.title}</Text>

          <View style={styles.badgeContainer}>
            <View
              style={[
                styles.badge,
                {
                  backgroundColor:
                    video?.category === 1
                      ? '#465D3A'
                      : video?.category === 2
                        ? '#1E2DBD'
                        : '#673B3F',
                },
              ]}
            >
              <Text style={styles.badgeText}>
                {CATEGORIES[video?.category as keyof typeof CATEGORIES]}
              </Text>
            </View>

            <Text>{convertDate(video?.created_at as string)}</Text>
          </View>

          <Text style={styles.description}>{video?.description}</Text>

          <View style={styles.iconContainer}>
            <View style={styles.iconRow}>
              <FontAwesome name="eye" size={16} color="gray" />
              <Text style={styles.iconText}>
                {video?.views || 0}{' '}
                {video?.views === 1 ? 'visualização' : 'visualizações'}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.iconRow}
              onPress={() => {
                updatedVideoMutation.mutate('likes')
              }}
            >
              <MaterialIcons name="thumb-up" size={16} color="gray" />
              <Text style={styles.iconText}>
                {video?.likes || 0}{' '}
                {video?.likes === 1 ? 'curtida' : 'curtidas'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  )
}
