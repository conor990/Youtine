import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView} from 'react-native';




export default function AbsScreen({ navigation }){

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
                <Text style={styles.MainworkoutHeading}>Abs Exercises</Text>
                <View style={{ marginBottom:35, borderBottomWidth: 1, borderBottomColor:'black', width:'80%', height:1 }} />
            </View>    


            <View style={styles.workoutStage}>

                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}>Hollow Hold</Text>
                </View>

                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/abs1.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />

                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Lay flat on the ground with your arms extended over head.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> Pick your upper back and your legs off the ground. Your body should be in a banana shape.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>3.</Text> Hold in this position.</Text>
               
                </View>
            </View>




            <View style={styles.workoutStage}>
                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}> Russian Twist</Text> 
                </View>

                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/abs2.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />

                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Hold the bar with a slightly wider than shoulder width grip. Push the bar up toward the ceiling and maintain that elbow extension.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> Flex your abs and sit-up. Aim to get your torso vertical while maintaining the barbell overhead.</Text>
                </View>
            </View>




            <View style={styles.workoutStage}>
                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}>Barbell Situp</Text> 
                </View>


                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/abs3.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />
                
                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Use a handle attachment set all the way to the bottom of the machine.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text>Bring both of the handles to your chest and make sure you are in the center of the cable crossover.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>3.</Text> Walk a few steps forward. Then press the weight forward. From there, your shoulders should horizontally abduct and adduct while your elbows stay in a fixed position.</Text>
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
    borderRadius:40
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
