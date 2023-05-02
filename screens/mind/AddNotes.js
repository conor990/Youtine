import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, ScrollView, TouchableOpacity, FlatList,TextInput } from 'react-native';
import { auth } from '../../firebase'
import { firestore } from '../../firebase'

export default function AddNotes({ userId }){
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

                <TextInput
                    style={styles.input}
                    placeholder="Note Title"
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Note Text"
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
                <Button title="Add Note" onPress={handleAddNote} />
                
                

            </View>
  
      </View>
    );
}







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
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
      },

});
