import { VideosResponse } from '../types/video'

export const groupData = (
  items: VideosResponse[],
  groupSize: number,
): VideosResponse[][] => {
  if (groupSize <= 0) throw new Error('O groupSize deve ser maior que 0')

  return items.reduce<VideosResponse[][]>((groups, _, index) => {
    if (index % groupSize === 0) {
      groups.push(items.slice(index, index + groupSize))
    }
    return groups
  }, [])
}
