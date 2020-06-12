import {StyleSheet} from 'react-native';

const stylesLogin = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderStyle: 'solid',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  fieldControl: {
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderStyle: 'solid',
    borderRadius: 5,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 0, //https://stackoverflow.com/questions/37878613/react-native-textinput-displays-wrong-when-changing-height-on-android
  },
  btnSubmit: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#c40827',
    height: 30,
    width: '100%',
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    width: '100%',
  },
  itemActivityContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingBottom: 5,
    marginBottom: 15,
  },
  itemActivity: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  itemActivityNotFound: {
    fontStyle: 'italic',
    fontSize: 12,
  },
  headings: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  itemActivityStatus: {
    fontSize: 12,
    textTransform: 'lowercase',
  },
});

export default stylesLogin;
