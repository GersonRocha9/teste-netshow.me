import { api } from './api'

export const getVideos = async () => {
  const { data } = await api.get('/videos')

  return data
}
