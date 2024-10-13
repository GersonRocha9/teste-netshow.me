import { api } from '@services'

export const getVideoById = async (videoId: string) => {
  const { data } = await api.get(`/videos/${videoId}`)

  return data
}
