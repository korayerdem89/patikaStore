/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
     backgroundColor:'gray',
     borderRadius:10,
     display:'flex',
     width: Dimensions.get('window').width / 2,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius:5,
    resizeMode: 'contain',
  },
  title: {fontWeight: 'bold', fontSize: 18},
  description: {
    marginTop: 3,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  inner_container: {
    padding: 5,
  },
});
