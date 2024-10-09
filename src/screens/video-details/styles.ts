import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  badge: {
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    marginLeft: 5,
    color: 'gray',
  },
  buttonContainer: {
    padding: 10,
  },
})
