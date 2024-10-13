import { api } from '@services'

export const getVideos = async () => {
  const { data } = await api.get('/videos')

  return data
}
