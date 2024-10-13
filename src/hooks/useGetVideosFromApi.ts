import { QUERY_KEYS } from '@constants'
import { getVideos } from '@services'
import { useQuery } from '@tanstack/react-query'
import { VideosResponse } from '@types'

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
