import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#9c9a97',
    marginBottom: 15,
  },
  wrapperSelect: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    justifyContent: 'center',
  },
  labelMessage: {
    fontSize: 16,
    color: '#9c9a97',
  },
  selectMethod: {
    flex: 1.3,
    justifyContent: 'flex-start'
  },
  currentValue: {
    padding: 0,
    color: 'green',
    width: "100%",
    backgroundColor: 'transparent',
  },
});
