import { QUERY_KEYS } from '@constants'
import { getVideoById } from '@services'
import { useQuery } from '@tanstack/react-query'
import { VideosResponse } from '@types'

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
