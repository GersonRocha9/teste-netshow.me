import { useQuery } from '@tanstack/react-query'

import { getVideos } from '../services/get-videos'
import { VideosResponse } from '../types/video'
import { groupData } from '../utils/group-items'

export const useGroupedVideos = (groupSize: number) => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<VideosResponse[]>({
    queryKey: ['videos'],
    queryFn: getVideos,
  })

  const videos = groupData(data, groupSize)

  return { videos, isLoading, isError }
}
