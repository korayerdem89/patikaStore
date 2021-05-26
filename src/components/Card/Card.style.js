/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
     backgroundColor:'#eceef0',
     borderRadius:10,
     display:'flex',
     width: Dimensions.get('window').width / 2 - 10,
     margin:5,
     flex:1,
  },
  image: {
    marginBottom:3,
    height: Dimensions.get('window').height / 3.5,
    borderRadius:3,
    margin:10,
    resizeMode:'contain',
    padding:5,
    borderColor:'white',
    borderWidth:1,
    backgroundColor:'white',
   },
   descriptions: {
     padding:4,
   },
  title: {fontWeight: 'bold',   fontSize: 18},
  description: {
    marginTop: 3,
  },
  model: {
    fontWeight: 'bold',
  },
  price: {
    color:'gray',
  },
});
