import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, ScrollView, TouchableOpacity, FlatList,TextInput } from 'react-native';
import { auth } from '../../firebase'
import { firestore } from '../../firebase'
import MindScreen from '../MindScreen';
import { color } from 'react-native-reanimated';

export default function AddNotes({ navigation }){
    const usersId = auth.currentUser?.uid;
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleAddNote = () => {
        if (!title || !text) {
          return;
        }
      
        firestore
          .collection('notes')
          .add({
            title,
            text,
            createdAt: new Date(),
            usersId,
          })
          .then(() => {
            console.log('Note added successfully!');
          })
          .catch((error) => {
            console.log('Error adding note: ', error);
          });
      
        setTitle('');
        setText('');
      };
      
      

    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../components/assets/logoLong.png')} />
  
            <View style={styles.mainStage}>

              <View style={{width:'100%'}}>
                  <Text style={styles.MotivationHeading}>Title</Text>
              </View> 

                <TextInput
                    style={styles.inputTitle}
                    placeholder="Note Title"
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />

                  <View style={{width:'100%'}}>
                      <Text style={styles.MotivationHeading}>Note text</Text>
                  </View> 

                <TextInput
                    style={styles.input}
                    multiline= {true}
                    placeholder="Note Text"
                    value={text}
                    onChangeText={(text) => setText(text)}
                />

                <View style = {styles.buttonsView}>
                    <TouchableOpacity
                    onPress={handleAddNote}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>
                      Add Note
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("TabNavigator")}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>
                      Back
                    </Text>
                  </TouchableOpacity>
                </View>
                
                
            </View>
  
      </View>
    );
}







const styles = StyleSheet.create({

  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#6e9f7b',
  },

  mainStage: {
    backgroundColor: '#cfd1d0',
    flex:1,
    flexDirection: 'column',
    height: '100%',
    borderRadius:'40px',
    justifyContent:'space-evenly',
    flexWrap: 'wrap',
    padding: 30
  },


    logo: {
      width:155,
      height:30,
      margin:20,
      marginTop:50
    },


      input: {
        borderWidth: 8,
        borderColor: '#B6B6B6',
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
        width: '100%',
        height:'20%',
        backgroundColor: '#FBFBFB'
      },

      inputTitle: {
        borderWidth: 8,
        borderColor: '#B6B6B6',
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
        width: '100%',
        height:'7%',
        backgroundColor: '#FBFBFB'
      },

      MotivationHeading: {
        fontFamily:'Helvetica-Bold',
        color:'#383838',
        fontSize:27,
        textAlign:'left',
        marginLeft:20,
        marginBottom:0,
      },

      button: {
        //backgroundColor: '#474747',
        backgroundColor: '#FBFBFB',
        margin: 15,
        borderWidth: 6,
        borderColor: '#6e9f7b',
        borderRadius: 4,
        width: 105,
        height: 50,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },

      buttonsView: {
        width: '100%',
        justifyContent:'center',
        alignItems: 'center'

      },

      buttonText: {
        //color: 'white',
        color:'#383838',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
      }

});
