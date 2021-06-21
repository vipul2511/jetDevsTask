import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'10%',
  },
  text: {

    color: 'grey',
    fontSize: wp(6),
    textTransform: 'capitalize' ,
   

  }
})
