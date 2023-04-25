import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView} from 'react-native';




export default function ArmsScreen({ navigation }){

    return(
        
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../components/assets/logoLong.png')} />
            <View style={styles.mainStage}>

             <ScrollView style={styles.scrollView}>
                <View style={{
                    width:'100%',
                    justifyContent:'space-evenly',
                    flexDirection:'row',
                    flexWrap: 'wrap'
                }}>
        
             <View style={styles.MainheadingsView}>
                <Text style={styles.MainworkoutHeading}>Arm Exercises</Text>
                <View style={{ marginBottom:35, borderBottomWidth: 1, borderBottomColor:'black', width:'80%', height:1 }} />
            </View>    


            <View style={styles.workoutStage}>
                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}>Band Bayesian hammer Curl</Text>
                </View>

                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/Arms1.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />

                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Attach band to a low anchor point. Use a neutral grip.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> Flex your elbow until you feel your biceps contract. Then fully extend elbows.</Text>

                </View>
            </View>



            <View style={styles.workoutStage}>

                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}> Chin ups</Text> 
                </View>

                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/arms2.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />

                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Grab the bar shoulder width apart with a supinated grip (palms facing you)</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>3.</Text> Slowly return to starting position. Repeat.</Text>
                </View>
            </View>



            <View style={styles.workoutStage}>
                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}>Bicep Stretch</Text> 
                </View>


                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/arms3.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />
                
                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Stand an arms width away from the wall.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> Raise your arms out behind you, and place them on the wall with your fingers pointing up.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>3.</Text> Bend your knees whilst keeping your hands in the same position.</Text>
                </View>
            </View>



                  
                    </View>
                </ScrollView>
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

scrollView: {
    height: '95%',
    marginTop:7
},
scrollviewstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

videos: {
    width:'90%',
    height:200,
    borderRadius:30
},

headingsView: {
    width:'100%',
},

workoutHeading: {
    fontFamily:'Helvetica-Bold',
    fontSize:21,
    color:'#383838',
    margin:17,
    marginBottom: 15,
    marginLeft:32
  },
  MainworkoutHeading: {
    fontFamily:'Helvetica-Bold',
    fontSize:34,
    color:'#383838',
    margin:17,
    marginBottom: 10,
    marginTop:50
  },
  MainheadingsView: {
    width:'100%',
    alignItems:'center'
},

listItem: {
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 20,
    marginTop:10
  },

  listView: {
    width:'90%',
    marginTop:12,
    marginBottom:25
  },

  number: {
    fontSize: 18,
    fontWeight:'bold',
    backgroundColor:'#8abf98',
  },

  workoutStage: {
    backgroundColor:'#dedede',
    width:370,
    borderRadius:'15px',
    marginTop:20,
    marginBottom: 35,
    flexDirection:'column',
    alignItems:'center',
    shadowColor:'#000',

    shadowOffset: {
      width:0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, //elevation is for android & shadow props are for ios 

  },


});
