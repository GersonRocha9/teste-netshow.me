import { NavigationProp } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import { ThumbnailCard } from '../src/components/thumbnail-card'
import { AppStackRoutes } from '../src/routes/routes'

const mockedVideo = {
  id: '90562',
  title:
    'Como alavancar vendas indiretas com parcerias, com Guilherme Tsuchida',
  created_at: '2024-06-03T19:13:49.000000Z',
  category: 1,
  hls_path:
    'https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/14e23fcb-aeb4-4e23-bb26-e130752c1b67/playlist.m3u8',
  description:
    'Descubra como empresas de todos os portes estão aproveitando estratégias de canais e vendas indiretas para impulsionar seus negócios e obter resultados excepcionais! Para falar sobre isso, convidamos Guilherme Tsuchida, responsável pelo desenvolvimento de novas parcerias estratégicas na Microsoft Américas, para abrilhantar o episódio #21 do #OverTheCast',
  thumbnail:
    'https://static-ott.netshow.me/sites/70/media/268999/Over-The-Cast---21.png',
  site_id: 70,
  views: 0,
  likes: 0,
}

describe('Thumbnail Card', () => {
  it('should render Thumbnail Card correctly', () => {
    render(
      <ThumbnailCard
        index={0}
        video={mockedVideo}
        navigation={{} as NavigationProp<AppStackRoutes>}
      />,
    )
  })
})
