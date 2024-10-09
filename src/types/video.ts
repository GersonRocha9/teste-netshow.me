export type VideosResponse = {
  id: string
  title: string
  created_at: string
  category: number
  hls_path: string
  description: string
  thumbnail: string
  site_id: number
  views: number
  likes: number
}

export const CATEGORIES = {
  1: 'Over The Cast',
  2: 'Flow Experience 2021',
  3: 'Netshow.me Talks',
}
