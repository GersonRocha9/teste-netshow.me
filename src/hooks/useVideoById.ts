import { useQuery } from '@tanstack/react-query'

import { getVideoById } from '../services/get-video-by-id'
import { VideosResponse } from '../types/video'

export const useVideoById = (videoId: string) => {
  const {
    data: video,
    isLoading,
    isError,
  } = useQuery<VideosResponse>({
    queryKey: ['videoInfo', videoId],
    queryFn: () => getVideoById(videoId),
  })

  return { video, isLoading, isError }
}
