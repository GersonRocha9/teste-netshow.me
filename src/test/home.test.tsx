import { NavigationProp } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react-native'

import { AppStackRoutes } from '../routes/routes'
import { Home } from '../screens/home/home'

const queryClient = new QueryClient()

describe('Home', () => {
  it('should render Home screen correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home navigation={{} as NavigationProp<AppStackRoutes>} />
      </QueryClientProvider>,
    )
  })
})
