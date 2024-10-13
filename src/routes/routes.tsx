import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, VideoDetails } from '@screens'

export type AppStackRoutes = {
  home: undefined
  videoDetails: { videoId: string }
}

const Stack = createNativeStackNavigator<AppStackRoutes>()

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="videoDetails" component={VideoDetails} />
    </Stack.Navigator>
  )
}
