import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#9c9a97',
    marginBottom: 15,
  },
  wrapperSelect: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
  },
  customLabel: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d9de',
    marginBottom: 8,
  },
  labelMessage: {
    fontSize: 16,
    color: '#9c9a97',
  },
  selectMethod: {
    flex: 1.4,
    justifyContent: 'center',
  },
  dropdown: {
    color: '#3493e3',
    borderBottomWidth: 0,
    marginBottom: 10,
    fontWeight: '700',
  },
});
