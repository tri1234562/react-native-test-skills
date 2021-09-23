import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    marginBottom: 10,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  greyText: {
    color: '#737573'
  },
  holdText: {
    fontWeight: '800',
  },
  greenText: {
    color: '#78ed6b',
  },
  fs20: {
    fontSize: 20,
  },
});
