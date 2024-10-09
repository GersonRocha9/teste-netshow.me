import { api } from './api'

export const countViewVideo = async (videoId: string, views: number) => {
  const { data } = await api.patch(`/videos/${videoId}`, {
    views: views + 1,
  })

  return data
}
