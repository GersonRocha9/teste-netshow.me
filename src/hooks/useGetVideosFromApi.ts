import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '../constants/queryKeys'
import { getVideos } from '../services/get-videos'
import { VideosResponse } from '../types/video'

export const useGetVideosFromApi = () => {
  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery<VideosResponse[]>({
    queryKey: [QUERY_KEYS.VIDEOS],
    queryFn: getVideos,
  })

  if (isError) {
    console.error(error)
  }

  return { videos, isLoading, isError, error }
}
