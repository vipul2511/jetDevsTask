
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  Alert,
  BackHandler
} from 'react-native';
import resp from 'rn-responsive-font'
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login(props){
const [emailID,setemailID]=useState('');
const [password,setpassword]=useState('');
const [showText,setshowText] =useState(true);
// Android Back button handler to exit the app
useEffect(() => {
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
}, []);

// validation for email
 function validate(text){
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    alert('Please enter validate email');
    return false;
  }
  else {
    if(emailID=="reactnative@imaginato.com"){
      if(password=="imaginato@123"){
        props.navigation.navigate('Tab');
      }else{
        alert('Please enter correct password');
      }
    }else{
      alert('Please enter correct email');
    }
    
  }
}
// check the input email and pssword
const  CheckTextInput = () => {
   Keyboard.dismiss();
    if (emailID === '') {
      alert('Please Enter Email ID ');
    }
    else if (password === '') {
      alert('Please Enter Password');
    }
    else {
      validate(emailID)
    }
  };


    return(
     <View style={styles.container}>
       <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={styles.container2}>
            <Text>APP Logo</Text>
            <Text style={styles.CartTextStyle}>Jet Devs</Text>
            <View style={styles.box}></View>
            <View style={{alignSelf:'flex-start'}}>
            <Text style={styles.UserName}>Email ID</Text>
            </View>
            <View style={styles.inputView}>
              <View style={{ flexDirection: 'row', marginLeft:15 }}></View>

              <TextInput
                placeholder=''
                placeholderTextColor='#000'
                underlineColorAndroid='#1976D2'
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                style={styles.input}
                value={emailID}
                // maxLength={10}
                onChangeText={phone_number => setemailID(phone_number)}
              />
            </View>
            <View style={{alignSelf:'flex-start'}}>
            <Text style={styles.UserName}>Password</Text>
            </View>
            <View style={styles.inputView}>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}></View>

              <TextInput
                placeholder=''
                placeholderTextColor='#000'
                underlineColorAndroid='#1976D2'
                style={styles.input}
                autoCapitalize={'none'}
                value={password}
                secureTextEntry={showText}
                onChangeText={password => setpassword(password)}
              />
              <Icon  name={showText==true?"eye":"eye-off"} color={"#1976D2"} size={25}  style={{alignSelf:'flex-end',position:'absolute'}} onPress={()=>{setshowText(!showText)}} />
            </View>
            <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.2}
              onPress={() => {
               CheckTextInput()
              }}>
              <Text style={styles.buttonWhiteTextStyle}>Login</Text>
            </TouchableOpacity>
            
          </View>
          </ScrollView>
     </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    
      container2: {
        height: 780,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      loading: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      box: {
        marginTop: 60,
        height: resp(40),
        width: resp(40),
      },
      CartTextStyle: {
        marginTop: resp(0),
        fontSize: resp(30),
        color: '#000',
        fontWeight: 'bold',
      },
      buttonWhiteTextStyle: {
        textAlign: 'center',
        fontSize: resp(16),
        color: 'white',
        alignContent: 'center',
      },
      ImageView: {
        height: resp(100),
        width: resp(120),
        backgroundColor: 'white',
      },
      horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: resp(80),
      },
      OrText: {
        fontFamily: 'AvenirNext-Bold',
        color: 'red',
        fontSize: 14,
        paddingHorizontal: 5,
        alignSelf: 'center',
      },
      hairline: {
        backgroundColor: '#A2A2A2',
        height: 1,
        width: 165,
      },
      UserName: {
        color: 'gray',
        fontSize: resp(12),
        textAlign: 'left',
        marginLeft:'8%'
      }, 
      SignUPText: {
        color: 'red',
        marginTop: 10,
        position: 'absolute', //Here is the trick
        bottom: 30,
      },
      color: {
        color: 'red',
      },
      account: {
        color: 'gray',
        marginTop: 10,
        position: 'absolute', //Here is the trick
        bottom: 10,
      },
      input: {
        color: 'black',
        width: 350,
        height: 50,
        padding: 10,
        textAlign: 'left',
      },
      loginButtonStyle: {
        marginTop: 10,
        width: resp(350),
        height: resp(50),
        padding: 10,
        backgroundColor: '#1976D2',
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      },
});


