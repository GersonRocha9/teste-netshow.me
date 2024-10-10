import { NavigationProp } from '@react-navigation/native'
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import Animated, {
  LinearTransition,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated'

import { AppStackRoutes } from '../routes/routes'
import { VideosResponse } from '../types/video'

const WIDTH_SCREEN = Dimensions.get('window').width
const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity)

interface ThumbnailCardProps {
  index: number
  video: VideosResponse
  navigation: NavigationProp<AppStackRoutes>
}

export const ThumbnailCard = ({
  index,
  video,
  navigation,
}: ThumbnailCardProps) => {
  return (
    <View style={styles.row}>
      <TouchableAnimated
        entering={
          index % 2 === 0
            ? SlideInLeft.duration(500).delay(125 * index)
            : SlideInRight.duration(500).delay(125 * index)
        }
        layout={LinearTransition}
        style={styles.touchable}
        onPress={() => {
          navigation.navigate('videoDetails', { videoId: video.id })
        }}
      >
        <ImageBackground
          style={styles.thumbnail}
          source={{ uri: video.thumbnail }}
        />
      </TouchableAnimated>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  thumbnail: {
    width: WIDTH_SCREEN / 2 - 15,
    aspectRatio: 0.7,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  touchable: {
    flexBasis: '48%',
  },
})
