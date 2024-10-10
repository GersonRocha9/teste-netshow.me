import { NavigationProp } from '@react-navigation/native'

import { AppStackRoutes } from '../routes/routes'

export interface VideoDetailsProps {
  route: {
    params: {
      videoId: string
    }
  }
  navigation: NavigationProp<AppStackRoutes>
}
