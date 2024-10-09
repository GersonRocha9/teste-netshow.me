import { api } from './api'

export const likeVideo = async (videoId: string, likes: number) => {
  const { data } = await api.patch(`/videos/${videoId}`, {
    likes: likes + 1,
  })

  return data
}
