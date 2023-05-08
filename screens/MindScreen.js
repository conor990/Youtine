import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native';
import InspoComponent from '../components/inspo';
import { auth } from '../firebase'
import { firestore } from '../firebase'

export default function MindScreen({ navigation }){
  const [previousQuotes, setPreviousQuotes] = useState([]);
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    const fetchNotesData = async () => {
      const user = auth.currentUser;
      const notesData = await fetchNotes(user.uid);
      setNotes(notesData);
    };
  
    fetchNotesData();
  }, []);
  


  const fetchNotes = async (userId) => {
    const notes = [];
    const snapshot = await firestore.collection('notes').where('usersId', '==', userId).get();
  
    snapshot.forEach((doc) => {
      notes.push({ id: doc.id, ...doc.data() });
    });
  
    return notes;
  };
  


  
  

    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../components/assets/logoLong.png')} />
  
        <View style={styles.mainStage}>



        <View style={{width:'100%'}}>
                <Text style={styles.MotivationHeading}>Motivation</Text>
        </View> 



        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewInspo} testID="scroll-view-inspo">
          <InspoComponent onNewQuote={(quote) => addNewQuote(quote)} />
          {previousQuotes.map((q, index) => (
              <View key={index} style={styles.inspo}>
                <Text style={styles.InspoText}>“{q}”</Text>
              </View> 
            ))}

       </ScrollView>


      <View style={{width:'100%'}}>
                <Text style={styles.MotivationHeading}>My Notes</Text>
        </View> 


  
        <ScrollView style={styles.ScrollView} testID="scroll-view-notes">

        <View style={{
        width:'100%',
        justifyContent:'space-evenly',
        flexDirection:'row',
        flexWrap: 'wrap'
        }}>

          {notes.map((item) => (
            <View key={item.id} style={styles.note}>
              <Text style={{ fontFamily: "AppleSDGothicNeo-SemiBold", fontSize: 20 }}>
                {item.title}
              </Text>
              <Text style={{ fontFamily: "AppleSDGothicNeo-Thin", fontSize: 17 }}>
                {item.text}
              </Text>
            </View>
          ))}

          </View>
        </ScrollView>



      <View style={{width:'100%', alignItems:'center',}}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("AddNotes", { userId: auth.currentUser?.uid })
        }
      >
        <Text style={{ fontSize: 35 }}>➕</Text>
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


  ScrollView: {
    marginHorizontal: 1,
    height:'50%',
  },
  text: {
    fontSize: 42,
  },
  scrollViewInspo: {
    height:'20%',
    padding:10,
  },
  text: {
    fontSize: 42,
  },



  inspo: {
    backgroundColor:'#FBFBFB',
    height:130,
    width:300,
    borderRadius:'15px',
    margin:9,

    shadowColor:'#000',

    shadowOffset: {
      width:0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, //elevation is for android & shadow props are for ios 

  },

  InspoText: {
    fontSize:25,
    fontFamily:'AmericanTypewriter-CondensedLight',
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    padding:14,
},



MotivationHeading: {
  fontFamily:'Helvetica-Bold',
  color:'#383838',
  fontSize:27,
  textAlign:'left',
  margin:10,
  marginTop:15,
  marginLeft:20,
  marginBottom:0,
},


note: {
  backgroundColor:'#a6e0b6',
 // height:170,
  width:170,
  borderRadius:'10px',
  marginTop:20,
  padding:8,

  shadowColor:'#000',

  shadowOffset: {
    width:0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, //elevation is for android & shadow props are for ios 

},



addButton:{
  borderRadius: 100,
  borderColor:'#6e9f7b',
  borderWidth:'5px',
  backgroundColor: 'white',
  width: 50,
  height: 50,
  alignItems:'center',
  justifyContent:'center',
}

});
