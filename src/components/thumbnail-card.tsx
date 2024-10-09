import { View, ImageBackground, StyleSheet } from 'react-native'

interface Item {
  thumbnail: string
}

export const ThumbnailCard = ({ item }: { item: Item[] }) => {
  return (
    <View style={styles.row}>
      {item.map((singleItem, index) => (
        <ImageBackground
          key={index}
          style={styles.thumbnail}
          source={{ uri: singleItem.thumbnail }}
        />
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
    flexBasis: '48%',
    aspectRatio: 0.7,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
})
