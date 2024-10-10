import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Video, ResizeMode } from 'expo-av'
import { useCallback, useState, useRef } from 'react'
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Header } from '../../components/header'
import { VideoLoading } from '../../components/video-loading'
import { QUERY_KEYS } from '../../constants/queryKeys'
import { useVideoById } from '../../hooks/useVideoById'
import { countViewVideo } from '../../services/count-view-video'
import { likeVideo } from '../../services/like-video'
import { CATEGORIES } from '../../types/video'
import { VideoDetailsProps } from '../../types/video-details'
import { convertDate } from '../../utils/convert-date'

import { styles } from './styles'

export const VideoDetails = ({ route, navigation }: VideoDetailsProps) => {
  const queryClient = useQueryClient()
  const { videoId } = route.params
  const { video } = useVideoById(videoId)
  const [isLoading, setIsLoading] = useState(true)
  const hasFocusedRef = useRef(false)

  const likeVideoMutation = useMutation({
    mutationFn: () => likeVideo(videoId, video?.likes as number),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.VIDEO_INFO, videoId],
      })
    },
  })

  const countViewVideoMutation = useMutation({
    mutationFn: () => countViewVideo(videoId, video?.views as number),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.VIDEO_INFO, videoId],
      })
    },
  })

  useFocusEffect(
    useCallback(() => {
      if (!hasFocusedRef.current) {
        countViewVideoMutation.mutate()
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
                likeVideoMutation.mutate()
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
