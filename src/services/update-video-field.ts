import { api } from './api'

export const updateVideoField = async (
  videoId: string,
  field: 'likes' | 'views',
  value: number,
) => {
  const { data } = await api.patch(`/videos/${videoId}`, {
    [field]: value + 1,
  })

  return data
}
