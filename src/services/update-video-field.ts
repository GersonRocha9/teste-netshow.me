import { api } from '@services'

export const updateVideoField = async (
  videoId: string,
  field: 'likes' | 'views',
  value: number,
) => {
  await api.patch(`/videos/${videoId}`, {
    [field]: value + 1,
  })
}
