import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'

//import { auth } from './firebase'

const SignupScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
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
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)} 
            style={styles.input}
        />

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
            onPress={() => { }}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex:1,

        alignItems:'center',
        backgroundColor: '#a5c4ae',
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

        marginTop:5,
        borderColor:'#fff',
        borderWidth: 2
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
        fontSize: 16,
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
        color:'#d1e3d6',
        fontSize: 17,
    },
    

})