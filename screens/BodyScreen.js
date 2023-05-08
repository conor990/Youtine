import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Text>Something went wrong.</Text>;
    }

    return this.props.children;
  }
}


const Stack = createNativeStackNavigator();

export default function BodyScreen({ navigation }){

    return(
      <ErrorBoundary>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../components/assets/logoLong.png')} testID="logo" />
  
            <View style={styles.mainStage}>

                <View style={{width:'100%'}}>
                    <Text style={styles.PageHeading}>What would you like to workout ?...</Text>
                </View>

                <TouchableOpacity style={styles.tasksStage} onPress={() => navigation.navigate('Arms')} testID="armsWorkoutOption">
                  <View style={styles.allInfo}>
                        <View style={styles.left}>
                            <Text style={styles.workoutHeading}>Arms</Text>
                            <Text style={styles.smallerText}>3 Exercises</Text>
                            <Text style={styles.smallerText}>20 minutes</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.photos} source={require('../components/assets/bodypage/arms.jpg')} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tasksStage} onPress={() => navigation.navigate('Chest')} testID="chestWorkoutOption">
                   <View style={styles.allInfo}>
                        <View style={styles.left}>
                            <Text style={styles.workoutHeading}>Chest</Text>
                            <Text style={styles.smallerText}>3 Exercises</Text>
                            <Text style={styles.smallerText}>25 minutes</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.photos} source={require('../components/assets/bodypage/chest.jpg')} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tasksStage} onPress={() => navigation.navigate('Abs')} testID="absWorkoutOption">
                    <View style={styles.allInfo}>
                        <View style={styles.left}>
                            <Text style={styles.workoutHeading}>Abs</Text>
                            <Text style={styles.smallerText}>3 Exercises</Text>
                            <Text style={styles.smallerText}>30 minutes</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.photos} source={require('../components/assets/bodypage/abs.jpg')} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tasksStage} onPress={() => navigation.navigate('Legs')} testID="legsWorkoutOption">
                  <View style={styles.allInfo}>
                        <View style={styles.left}>
                            <Text style={styles.workoutHeading}>Legs</Text>
                            <Text style={styles.smallerText}>3 Exercises</Text>
                            <Text style={styles.smallerText}>30 minutes</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.photos} source={require('../components/assets/bodypage/legs.jpg')} />
                        </View>
                    </View>
                </TouchableOpacity>
                
            </View>


        </View>
        </ErrorBoundary>
    );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#6e9f7b',
    height:'100%',
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

  PageHeading: {
    fontFamily:'Helvetica-Bold',
    color:'#383838',
    fontSize:25,
    textAlign:'left',
    margin:25,
    marginTop:30,
    marginBottom:0,
  },

  tasksStage: {
    backgroundColor:'#FBFBFB',
    height:'16%',
    width:370,
    borderRadius:'15px',
    marginTop:20,
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



  left: {
    width:'50%',
    height: '100%',
    flexDirection:'column',
  },

  imageContainer: {
    width:'50%',
    height: '100%',
    alignItems:'center',
  },

  photos : {
    width:'82%',
    height: '82%',
    borderRadius: '15px',
    marginTop: '6%',
  },




workoutHeading: {
  fontFamily:'Helvetica-Bold',
  fontSize:23,
  color:'#383838',
  margin:17,
  marginBottom: 10,
},

smallerText:{
  fontFamily:'Helvetica-Bold',
  fontSize:16,
  color:'#A1A1A1',
  marginLeft: 17,
  marginBottom: 5,
},



allInfo: {
  flexDirection: 'row'
}

});
