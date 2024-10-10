import { NavigationProp } from '@react-navigation/native'
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import { AppStackRoutes } from '../routes/routes'
import { VideosResponse } from '../types/video'

interface ItemProps {
  thumbnail: VideosResponse['thumbnail']
  id: VideosResponse['id']
}

const WIDTH_SCREEN = Dimensions.get('window').width

export const ThumbnailCard = ({
  item,
  navigation,
}: {
  item: ItemProps[]
  navigation: NavigationProp<AppStackRoutes>
}) => {
  return (
    <View style={styles.row}>
      {item.map((video, index) => (
        <TouchableOpacity
          key={index}
          style={styles.touchable}
          onPress={() => {
            navigation.navigate('videoDetails', { videoId: video.id })
          }}
        >
          <ImageBackground
            style={styles.thumbnail}
            source={{ uri: video.thumbnail }}
          />
        </TouchableOpacity>
      ))}
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
