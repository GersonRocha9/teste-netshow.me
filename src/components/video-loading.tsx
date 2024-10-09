import { View } from 'react-native'
import { Placeholder, PlaceholderMedia, Fade } from 'rn-placeholder'

export const VideoLoading = () => {
  return (
    <View>
      <Placeholder
        Animation={Fade}
        style={{
          width: '100%',
          height: 200,
          position: 'absolute',
          zIndex: 1,
          padding: 0,
        }}
      >
        <PlaceholderMedia
          isRound={false}
          style={{ width: '100%', height: 200 }}
        />
      </Placeholder>
    </View>
  )
}
