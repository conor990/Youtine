import { StyleSheet, View, Text, Image, Button} from 'react-native';

export default function ArmsScreen({ navigation }){
    return(
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../components/assets/logoLong.png')} />
            <View style={styles.mainStage}>
                
               <Text>arms</Text>
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
    width:'90%',
    height:190,
    marginTop:'5%'
  },

  profilePicture: {
    width: '50%',
    height: '95%',
    borderRadius: 100,
    alignSelf: 'center'
  },



  nameView: {
    width:'90%',
    height:50,
    marginTop:'5%'
  },

  nameText: {
    fontFamily:'Inter',
    color:'#383838',
    fontSize:28,
    alignSelf: 'center'
  },



  emailView: {
    width:'90%',
    height:25,
    marginBottom:30
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
    flexDirection:'row'
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
    width:'77%',
    height:60,
    marginTop: 30,
    fontSize:30
  },
  buttonText: {
    fontSize:20
  }
});
