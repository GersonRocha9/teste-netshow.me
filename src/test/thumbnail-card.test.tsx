import { NavigationProp } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import { ThumbnailCard } from '../components/thumbnail-card'
import { AppStackRoutes } from '../routes/routes'

import { mockedVideo } from './mocks/mock-utils'

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
