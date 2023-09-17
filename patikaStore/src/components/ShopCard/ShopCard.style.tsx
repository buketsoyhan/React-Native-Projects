import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.25,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  price: {
    fontWeight: 'bold',
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  outOfStock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },
  innerContainer: {
    padding: 5,
    borderTopColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: Dimensions.get('window').height / 7,
  },
});
