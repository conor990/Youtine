import { StyleSheet, Text, View, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import {useState} from "react";




const TasksComponent = () => {

    const [isChecked, setChecked] = useState(false);
    const [mind, setMind] = useState(false);
    const [body, setBody] = useState(false);
    const [meals, setMeals] = useState(false);




    return(
        
        <View>

            <View style={{width:'100%'}}>
                <Text style={styles.todaysTasksHeading}>Today's Tasks</Text>
            </View> 



            <View style={styles.tasksStage}>
                <View style={styles.icon}>
                    <Image style={styles.icons} source={require('./assets/bottomNavBar/brainBlack.png')} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.eachTaskHeading}>MIND</Text>
                    <Text style={styles.taskDesc}>Write down something you did this year that made you feel proud of yourself</Text>
                </View>
                <View style={styles.check}>
                    <Checkbox
                            style={styles.checkbox}

                            value={mind}
                            onValueChange={setMind}
                            color={mind ? '#ffbe56' : '#fff'}
                        />
                </View>
            </View>
            




            <View style={styles.tasksStage}>
                <View style={styles.icon}>
                     <Image style={styles.icons} source={require('./assets/bottomNavBar/weightBlack.png')} />
                </View>
                <View style={styles.body}>
                     <Text style={styles.eachTaskHeading}>BODY</Text>
                     <Text style={styles.taskDesc}>Do 20 jumping jacks</Text>
                </View>
                <View style={styles.check}>
                    <Checkbox
                            style={styles.checkbox}
                            value={body}
                            onValueChange={setBody}
                            color={body ? '#ffbe56' : '#fff'}
                        />
                </View>
            </View>




            <View style={styles.tasksStage}>
                <View style={styles.icon}>
                      <Image style={styles.icons} source={require('./assets/bottomNavBar/mealBlack.png')} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.eachTaskHeading}>MEALS</Text>
                    <Text style={styles.taskDesc}>Eat a citrus fruit today,     example: Orange, lemon or lime</Text>
                </View>
                <View style={styles.check}>
                    <Checkbox
                        style={styles.checkbox}
                        value={meals}
                        onValueChange={setMeals}
                        color={meals ? '#ffbe56' : '#fff'}
                    />
                </View>
            </View>




        </View>


    );
}

const styles = StyleSheet.create({
    tasksStage: {
        backgroundColor:'#FBFBFB',
        height:115,
        width:370,
        borderRadius:'30px',
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

     todaysTasksHeading: {
        fontFamily:'Helvetica-Bold',
        color:'#383838',
        fontSize:27,
        textAlign:'left',
        margin:20,
        marginTop:30,
        marginBottom:0,
      },

      icons: { //the images themselves
        width:66,  
        height:66,
      },

      eachTaskHeading:{ //the actual text
        fontFamily:'Helvetica-Bold',
        fontSize:22,
        color:'#383838',
        margin:15,
        marginBottom: 10,
      },

      taskDesc: {// actual text of the task descriptions
        paddingLeft:15,
        fontFamily:'Helvetica-Light',
      },

      icon: { //image div
        width:'25%',  
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      body: {
        width: '60%',
        height:'100%',
        flexDirection:'column',
      },

      check : {  //checkbox div
        width:'15%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
      },


      checkbox: { //actual checkbox
        Color: 'black',
      }
});

export default TasksComponent;