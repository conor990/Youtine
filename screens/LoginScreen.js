import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { firestore } from '../firebase'
import { auth } from '../firebase'
import {AsyncStorage} from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {


 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
            navigation.replace("TabNavigator")
        }
    })
 }, [])

 const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);

        // Create a new user document in Firestore
        createUserDocument(user.uid, { email });
      })
      .catch(error => alert(error.message))
  }

    // Function to create a new user document in Firestore
    const createUserDocument = (userId, data) => {
        firestore
          .collection("users")
          .doc(userId)
          .set(data)
          .then(() => {
            console.log("User document created in Firestore!");
          })
          .catch(error => {
            console.error("Error creating user document: ", error);
          });
      }


    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with', user.email);
      
          // Increment streak and save to AsyncStorage
          const newStreak = streak + 1;
          AsyncStorage.setItem('streak', newStreak.toString());
          setStreak(newStreak);
        })
        .catch(error => alert(error.message))
      }
      

    
 
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      
      <Image style={styles.logo} source={require('../components/assets/fullLogo.png')} />

      <View style={styles.inputContainer}>

        <TextInput 
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)} 
            style={styles.input}
        />

        <TextInput 
            placeholder="Password"
            value={password }
            onChangeText={text => setPassword(text)} 
            style={styles.input}
            secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.Rbutton]}
        >
            <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,

        alignItems:'center',
        backgroundColor: '#6e9f7b',
    },

    inputContainer: {
        width: '90%'
    },


    logo: {
        width:'90%',
        height:120,
        marginTop: 100,
        marginBottom: 100,

        shadowColor:'black',

        shadowOffset: {
          width:0,
          height: 3
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 5, //elevation is for android & shadow props are for ios 
    
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,
        margin:20
    },

    buttonContainer: {
        width: '60%',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 40

    },

    button: {
        backgroundColor: '#4f7359',
        width: '100%',
        padding: 15,
        borderRadius:15,
        alignItems:'center',

        marginTop:15,
        borderColor:'#fff',
        borderWidth: 2
    },
    Rbutton: {
        backgroundColor: '#fecea8',
        borderColor:'#636363',
    },

    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#76c57a',
        borderWidth: 2
    },

    buttonText: {
        color:'white',
        fontWeight: '700',
        fontSize: 19,
    },

    buttonOutlineText:{
        color:'#76c57a',
        fontWeight: '700',
        fontSize: 16,

    },

    registerButton: {
        marginTop:150,
        color:'#d1e3d6',
    },
    registerText: {
        color:'#636363',
        fontSize: 19,
        fontWeight: '700',
    },
    

})