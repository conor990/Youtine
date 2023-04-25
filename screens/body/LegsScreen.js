import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView} from 'react-native';




export default function LegsScreen({ navigation }){

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
                <Text style={styles.MainworkoutHeading}>Leg Exercises</Text>
                <View style={{ marginBottom:35, borderBottomWidth: 1, borderBottomColor:'black', width:'80%', height:1 }} />
            </View>    


            <View style={styles.workoutStage}>

                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}>Barbell Squat</Text>
                </View>

                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/legs1.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />

                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> Grip the bar across your shoulders and support it on your upper back. Unwrack the bar by straightening your legs, and take a step back.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>3.</Text> Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>4.</Text> Raise the bar back to starting position, lift with your legs and exhale at the top.</Text>
               
                </View>
            </View>




            <View style={styles.workoutStage}>
                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}> Dumbbell Romanian Deadlift</Text> 
                </View>

                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/legs2.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />

                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Stand with a shoulder width stance. Push your butt back while leaving your knees MOSTLY extended.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> You should feel a stretch in your hamstrings. When you feel the stretch, push your hips forward to complete the rep.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text> Do not push your hips all the way forward. This will hyperextend your spine. Just go to a normal standing position.</Text>
                </View>
            </View>




            <View style={styles.workoutStage}>
                <View style={styles.headingsView}>
                    <Text style={styles.workoutHeading}>Barbell Hip Thrust</Text> 
                </View>


                <Image
                    source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/legs3.gif' }}
                    style={styles.videos}
                    resizeMode="contain"
                />
                
                <View style={styles.listView}>
                    <Text style={styles.listItem}><Text style={styles.number}>1.</Text> Sit on the ground with a bench behind you. Have the barbell over your legs just above your hips.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>2.</Text>Lean back against the bench so that your shoulders are resting upon it, stretch your arms out to either side using the bench as support.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>3.</Text> Raise the weight by driving through your feet and extending your hips upwards. Support the weight with your shoulders and feet.</Text>
                    <Text style={styles.listItem}><Text style={styles.number}>4.</Text> Slowly extend as far as you can, and then slowly return to the starting position.</Text>
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
