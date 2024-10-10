import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '../constants/queryKeys'
import { getVideoById } from '../services/get-video-by-id'
import { VideosResponse } from '../types/video'

export const useVideoById = (videoId: string) => {
  const {
    data: video,
    isLoading,
    isError,
  } = useQuery<VideosResponse>({
    queryKey: [QUERY_KEYS.VIDEO_INFO, videoId],
    queryFn: () => getVideoById(videoId),
  })

  return { video, isLoading, isError }
}
