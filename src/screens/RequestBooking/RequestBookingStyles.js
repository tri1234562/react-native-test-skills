import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  pdh20: {
    paddingHorizontal: 20,
  },
  mgh20: {
    marginHorizontal: 20,
  },
  partTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 25,
  },
  titleText: {
    fontWeight: '700',
  },
  partOne: {
    flex: 1,
  },
  partOneHeader: {
    flexDirection: 'row',
    marginTop: 20,
    fontWeight: 'bold',
  },
  partOneTitle: {
    flex: 2,
  },
  partOneRating: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  partOneStar: {
    marginRight: 3,
  },
  partTwo: {
    marginVertical: 15,
  },
  blurRedText: {
    color: 'red',
    opacity: 0.7,
  },
  policyCheck: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  confirmMessage: {
    marginLeft: 8,
    color: 'gray',
    opacity: 0.7,
  },
  submitBox: {
    marginBottom: 15,
  },
  submitBtn: {
    borderRadius: 15,
  },
  submit: {
    marginTop: 10,
    marginBottom: 10,
  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#68a0cf',
  },
  activeSubmit: {
    backgroundColor: '#68a0cf',
  },
  disabledSubmit: {
    backgroundColor: '#ccc',
    color: 'gray',
    fontWeight: '500',
  },
});
