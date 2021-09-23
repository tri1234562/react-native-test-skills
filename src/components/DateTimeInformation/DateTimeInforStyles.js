import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 15,
    borderColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  checkinDate: {
    alignItems: 'flex-start',
  },
  checkoutDate: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  durations: {
    flex: 1,
    alignItems: 'flex-end',
  },
  dateBox: {
    flex: 1.5,
    borderRightColor: '#ccc',
    borderRightWidth: 1,
  },
  title: {
    color: '#9c9a97',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
  },
  content: {
    color: '#5c5857',
  },
});
