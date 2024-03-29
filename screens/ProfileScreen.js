import { StyleSheet, View, Text, Image, Button,TouchableOpacity} from 'react-native';
import { auth } from '../firebase'
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../firebase';



export default function ProfileScreen({ navigation }){

  const handleSignOut = () => {
    auth.signOut().then(() =>{
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  } 


  const [noteCount, setNoteCount] = useState(0);

  useEffect(() => {
    const fetchNoteCount = async () => {
      const userId = auth.currentUser.uid;
      const snapshot = await firestore.collection('notes').where('usersId', '==', userId).get();
      setNoteCount(snapshot.size);
    };

    fetchNoteCount();
  }, []);


  const [profileImage, setProfileImage] = useState(null);


  useEffect(() => {
    console.log('Profile image updated:', profileImage);
  }, [profileImage]);
  


  useEffect(() => {
    const fetchProfileImage = async () => {
      const userId = auth.currentUser.uid;
      const snapshot = await firestore.collection('mypic').doc(userId).get();
      if (snapshot.exists) {
        setProfileImage(snapshot.data().photoURL);
        console.log('profile picture set');
      }
    };

    fetchProfileImage();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      uploadImage(asset.uri);
    }
  };
  

  const uploadImage = async (uri) => {
    console.log('Uploading image:', uri); // Add console log
  
    const response = await fetch(uri);
    const blob = await response.blob();
    const userId = auth.currentUser.uid;
    const ref = storage.ref().child(`profileImages/${userId}`);
  
    const uploadTask = ref.put(blob);
  
    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.error(error);
      },
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        console.log('Image uploaded successfully, downloadURL:', downloadURL); // Add console log
  
        await firestore.collection('mypic').add({
          photoURL: downloadURL,
          userId,
        });
        console.log('Firestore updated successfully'); // Add console log
        setProfileImage(downloadURL); // Move this line here
      }
    );
  };
  
  


    return(
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../components/assets/logoLong.png')} />
            <View style={styles.mainStage}>
                
                <View style={styles.buttonView}>
                  <Button
                    title="Sign Out"
                    onPress={handleSignOut}
                    style={{fontSize: 40}}
                  />
                </View>

                <View style={styles.pictureView}>
                  <TouchableOpacity onPress={pickImage}>
                    <Image
                      style={styles.profilePicture}
                      source={profileImage ? { uri: profileImage } : require('../components/assets/profilepage/profilePic.jpg')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.nameView}>
                  <Text style={styles.nameText}>{auth.currentUser?.email}</Text>
                </View>


                <View style={styles.infoView}>
                  <View style={styles.emojiView}><Text style={styles.emoji}>🧠</Text></View>
                  <View style={styles.innerTextView}><Text style={styles.innerText}>Mind tasks completed</Text></View>
                  <View style={styles.numberView}><Text style={styles.numberText}>1</Text></View>
                </View>

                <View style={styles.infoView}>
                  <View style={styles.emojiView}><Text style={styles.emoji}>🤸</Text></View>
                  <View style={styles.innerTextView}><Text style={styles.innerText}>Body tasks completed</Text></View>
                  <View style={styles.numberView}><Text style={styles.numberText}>1</Text></View>
                </View>

                <View style={styles.infoView}>
                  <View style={styles.emojiView}><Text style={styles.emoji}>🥗</Text></View>
                  <View style={styles.innerTextView}><Text style={styles.innerText}>Meal tasks completed</Text></View>
                  <View style={styles.numberView}><Text style={styles.numberText}>1</Text></View>
                </View>

                <View style={styles.infoView}>
                  <View style={styles.emojiView}><Text style={styles.emoji}>🔥</Text></View>
                  <View style={styles.innerTextView}><Text style={styles.innerText}>Total notes</Text></View>
                  <View style={styles.TNnumberView}><Text style={styles.numberText}>{noteCount}</Text></View>
                </View>

                <View style={styles.buttonView}>
                  <Button
                    title="🔙"
                    onPress={() => navigation.navigate('Home')}
                    style={{fontSize: 40}}
                  />
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
    flexDirection: 'row',
    height: '100%',
    borderRadius:'40px',
    justifyContent:'space-evenly',
    flexWrap: 'wrap'
  },

  logo: {
    width:155,
    height:30,
    margin:20,
    marginTop:50
  },

  pictureView: {
    width:'50%',
    height:190,
   // marginTop:'5%'
  },

  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    alignSelf: 'center'
  },



  nameView: {
    width:'90%',
    height:50,
    marginTop:'5%'
  },

  nameText: {
    color:'#383838',
    fontSize:25,
    alignSelf: 'center'
  },



  emailView: {
    width:'90%',
    height:25,
    marginBottom:15
  },

  emailText: {
    fontFamily:'Helvetica-light',
    color:'#383838',
    fontSize:15,
    alignSelf: 'center'
  },


  infoView: {
    backgroundColor:'#B2ECC1',
    width:'77%',
    height:60,
    borderRadius:25,
    marginTop: '4%',
    alignItems: 'space-evenly',
    flexDirection:'row',

    shadowColor:'#000',

    shadowOffset: {
      width:0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, //elevation is for android & shadow props are for ios 

  },

  innerTextView: {
    height:'99%',
    flexDirection:'column',
    justifyContent:'center',
  },

  innerText:{
    fontSize:18
  },


  emoji: {
    fontSize: 30,
  },
  emojiView: {
    width:'10%',
    height:'99%',
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:10,
    marginRight:13
  },



  numberView: {
    height:'99%',
    width:'20%',
    flexDirection:'column',
    justifyContent:'center',
    marginLeft: '7%',
  },
  TNnumberView: {
    height:'99%',
    width:'20%',
    flexDirection:'column',
    justifyContent:'center',
    marginLeft: '35%',
  },
  numberText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#383838',
  },




  buttonView: {
    width:'100%',
    height:50,
    marginTop: 30,
    fontSize:30
  },
  buttonText: {
    fontSize:20
  }
});
