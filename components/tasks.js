import { StyleSheet, Text, View, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firestore } from '../firebase'



const TasksComponent = () => {

  const mindTasks = [
    "Write down three things you're grateful for today",
    'Write down your thoughts and feelings for 10 minutes',
    'Write a letter to yourself expressing self-compassion',
    'Practice deep breathing exercises for 5 minutes',
    'Write down something you did this year that made you feel proud of yourself',
    "Write a letter to someone you're grateful for",
    'Reflect on your day and identify one positive thing that happened',
    'Write down 3 affirmations and repeat them to yourself throughout the day',
    'Create a vision board with images and words that inspire you',
    'Practice mindfulness while doing a daily task (washing dishes, brushing teeth, etc.)',
    'Write a letter of forgiveness to someone who has hurt you',
    'Spend 10 minutes practicing visualization techniques',
    'Write down your personal values and how you can live them out',
    'Identify a negative self-talk pattern and challenge it with positive affirmations',
    'Write down your short-term and long-term goals and the steps needed to achieve them',
    'Spend 10 minutes focusing on a positive memory or experience',
    'Write a letter to your future self',
    'Practice positive self-talk and praise yourself for accomplishments',
    'Write down the things you love about yourself',
    'Identify a negative thought or belief and reframe it positively',
    'Spend 10 minutes doing a creative activity (drawing, coloring, etc.)',
    'Write a letter to someone who has positively impacted your life',
    'Write down your fears and create a plan to overcome them',
    'Spend 10 minutes in nature and focus on the present moment',
    'Write down your personal boundaries and communicate them to others',
    'Practice gratitude by writing down 3 things you\'re grateful for every morning',
    'Identify your triggers and create a plan to manage them',
    'Spend 10 minutes doing a guided relaxation exercise',
    'Write down your strengths and how you can utilize them in your life',
    'Reflect on your accomplishments and celebrate your progress'
  ];
  
  const bodyTasks = [
    'Take a 30-minute walk outside',
    'Do 10 minutes of stretching in the morning',
    'Try a new exercise class or YouTube workout video',
    'Drink at least 8 glasses of water throughout the day',
    'Practice a new yoga pose for 10 minutes',
    'Spend 20 minutes cleaning or organizing your living space',
    'Do a quick HIIT workout for 15 minutes',
    'Go for a bike ride around your neighborhood',
    'Spend 30 minutes dancing to your favorite music',
    'Take a relaxing bath or shower',
    'Try a new healthy recipe for breakfast, lunch, or dinner',
    'Do a 10-minute ab workout before bed',
    'Go for a jog or run for 20 minutes',
    'Spend 15 minutes foam rolling to relieve muscle tension',
    'Take a break from sitting and do some standing exercises or stretches',
    'Try a new type of workout equipment (resistance bands, kettlebells, etc.)',
    'Spend 30 minutes doing a household chore that gets you moving (vacuuming, mopping, etc.)',
    'Take a dance or fitness class online',
    'Go for a hike or walk in nature',
    'Do 20 minutes of yoga before bed to relax your body and mind',
    'Do a 5-minute plank workout',
    'Try a new sport or physical activity (tennis, soccer, etc.)',
    'Spend 15 minutes doing a guided meditation focused on',
    'Take a 30-minute walk outside',
    'Do 10 minutes of stretching in the morning',
    'Try a new exercise class or YouTube workout video',
    'Drink at least 8 glasses of water throughout the day',
    'Practice a new yoga pose for 10 minutes',
    'Spend 20 minutes cleaning or organizing your living space',
    'Do a quick HIIT workout for 15 minutes',
    'Go for a bike ride around your neighborhood',
    'Spend 30 minutes dancing to your favorite music',
  ];


  const mealTasks = [
    'Eat a bowl of mixed berries for breakfast',
    'Eat a spinach omelet for breakfast',
    'Eat a banana with peanut butter for a midday snack',
    'Eat a roasted sweet potato for lunch',
    'Eat a vegetable stir-fry for dinner',
    'Eat a green smoothie for breakfast',
    'Eat a salmon salad for lunch',
    'Eat a carrot and hummus snack',
    'Eat a mixed green salad with chicken for lunch',
    'Eat a vegetable wrap for lunch',
    'Eat a mango salsa with grilled chicken for dinner',
    'Eat a Greek yogurt parfait for breakfast',
    'Eat a caprese salad for lunch',
    'Eat a turkey and avocado sandwich for lunch',
    'Eat a baked sweet potato with black beans for dinner',
    'Eat a fruit smoothie for breakfast',
    'Eat a quinoa bowl with roasted veggies for lunch',
    'Eat a hummus and veggie wrap for lunch',
    'Eat a kale salad with roasted chicken for lunch',
    'Eat a roasted beet and goat cheese salad for lunch',
    'Eat a fruit salad for breakfast',
    'Eat a roasted broccoli and garlic pasta for dinner',
    'Eat a zucchini noodle and shrimp stir-fry for dinner',
    'Eat a cauliflower crust pizza for dinner',
    'Eat a Greek salad with chicken for lunch',
    'Eat a tofu stir-fry with vegetables for dinner',
    'Eat a fruit and yogurt parfait for breakfast',
    'Eat a lentil soup for lunch',
    'Eat a spinach and feta omelet for breakfast',
    'Eat a butternut squash and lentil curry for dinner'
  ];

  const getRandomTask = (tasksArray) => {
    const randomIndex = Math.floor(Math.random() * tasksArray.length);
    return tasksArray[randomIndex];
  };



  const randomMindTask = getRandomTask(mindTasks);
  const randomBodyTask = getRandomTask(bodyTasks);
  const randomMealTask = getRandomTask(mealTasks);

  const [isChecked, setChecked] = useState(false);
  const [mind, setMind] = useState(false);
  const [body, setBody] = useState(false);
  const [meals, setMeals] = useState(false);



  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks !== null) {
        const { timestamp, mindTask, bodyTask, mealTask } = JSON.parse(savedTasks);
        const now = new Date().getTime();
        const timePassed = now - timestamp;
  
        if (timePassed < 24 * 60 * 60 * 1000) {
          // Less than 24 hours have passed
          return { mindTask, bodyTask, mealTask };
        }
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
    return null;
  };



  const saveTasks = async (mindTask, bodyTask, mealTask) => {
    try {
      const tasks = {
        timestamp: new Date().getTime(),
        mindTask,
        bodyTask,
        mealTask,
      };
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };
  


const [mindTask, setMindTask] = useState("");
const [bodyTask, setBodyTask] = useState("");
const [mealTask, setMealTask] = useState("");

const isNewDay = async () => {
  try {
    const lastSavedString = await AsyncStorage.getItem('lastSaved');
    if (lastSavedString) {
      const lastSaved = new Date(lastSavedString);
      const now = new Date();
      return (
        now.getDate() !== lastSaved.getDate() ||
        now.getMonth() !== lastSaved.getMonth() ||
        now.getFullYear() !== lastSaved.getFullYear()
      );
    } else {
      await AsyncStorage.setItem('lastSaved', new Date().toISOString());
      return true;
    }
  } catch (error) {
    console.error('Error checking if it is a new day:', error);
  }
};


const [completedMindTasks, setCompletedMindTasks] = useState(0);
const [completedBodyTasks, setCompletedBodyTasks] = useState(0);
const [completedMealTasks, setCompletedMealTasks] = useState(0);

useEffect(() => {
  const initializeTasks = async () => {
    const isNewDayResult = await isNewDay();
    const savedTasks = await loadTasks();
    
    if (!isNewDayResult && savedTasks) {
      setMindTask(savedTasks.mindTask);
      setBodyTask(savedTasks.bodyTask);
      setMealTask(savedTasks.mealTask);
    } else {
      saveCompletedTasks(
        mind ? completedMindTasks + 1 : completedMindTasks,
        body ? completedBodyTasks + 1 : completedBodyTasks,
        meals ? completedMealTasks + 1 : completedMealTasks
      );
      const newMindTask = getRandomTask(mindTasks);
      const newBodyTask = getRandomTask(bodyTasks);
      const newMealTask = getRandomTask(mealTasks);
      setMindTask(newMindTask);
      setBodyTask(newBodyTask);
      setMealTask(newMealTask);
      saveTasks(newMindTask, newBodyTask, newMealTask);
      setMind(false);
      setBody(false);
      setMeals(false);
    }
  };

  initializeTasks();
}, []);


const loadCompletedTasks = async () => {
  try {
    const savedCompletedTasks = await AsyncStorage.getItem("completedTasks");
    if (savedCompletedTasks !== null) {
      const { mind, body, meals } = JSON.parse(savedCompletedTasks);
      setCompletedMindTasks(mind);
      setCompletedBodyTasks(body);
      setCompletedMealTasks(meals);
    }
  } catch (error) {
    console.error("Error loading completed tasks:", error);
  }
};



const saveCompletedTasks = async (mind, body, meals) => {
  try {
    const completedTasks = {
      mind,
      body,
      meals,
    };
    await AsyncStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  } catch (error) {
    console.error("Error saving completed tasks:", error);
  }
};


useEffect(() => {
  loadCompletedTasks();
}, []);


useEffect(() => {
  const loadCheckboxes = async () => {
    try {
      const mindValue = await AsyncStorage.getItem("mindCheckbox");
      if (mindValue !== null) {
        setMind(mindValue === "true");
      }
      
      const bodyValue = await AsyncStorage.getItem("bodyCheckbox");
      if (bodyValue !== null) {
        setBody(bodyValue === "true");
      }
      
      const mealsValue = await AsyncStorage.getItem("mealsCheckbox");
      if (mealsValue !== null) {
        setMeals(mealsValue === "true");
      }
    } catch (error) {
      console.error("Error loading checkboxes:", error);
    }
  };
  
  loadCheckboxes();
}, []);
  



      //user firestore
      // Function to add an item to a user's "checkedItems" array
      const checkItem = async (itemId) => {
        const user = auth.currentUser;
        const userDocRef = firestore.collection('users').doc(user.uid);
        const userDoc = await userDocRef.get();
      
        if (userDoc.exists) {
          const checkedItems = userDoc.data().checkedItems || [];
          if (!checkedItems.includes(itemId)) {
            checkedItems.push(itemId);
            userDocRef.update({ checkedItems });
          }
        }
      };
      
      // Function to retrieve the user's checked items
      const getCheckedItems = async () => {
        const user = auth.currentUser;
        const userDocRef = firestore.collection('users').doc(user.uid);
        const userDoc = await userDocRef.get();
      
        if (userDoc.exists) {
          return userDoc.data().checkedItems || [];
        }
        return [];
      };
      
      // Call checkItem(itemId) when a user checks an item
      // Call getCheckedItems() to retrieve the user's checked items
      const handleTaskCompleted = async (taskId) => {
        const user = auth.currentUser;
        const userDocRef = firestore.collection('users').doc(user.uid);
        const userDoc = await userDocRef.get();
      
        if (userDoc.exists) {
          const completedTasks = userDoc.data().completedTasks || [];
          if (!completedTasks.includes(taskId)) {
            completedTasks.push(taskId);
            userDocRef.update({ completedTasks: completedTasks });
          }
        } else {
          console.error('User document not found!');
        }
      };


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
                    <Text style={styles.taskDesc}>{mindTask}</Text>
                </View>
                <View style={styles.check}>
                <Checkbox
                  style={styles.checkbox}
                  value={mind}
                  onValueChange={(newValue) => {
                    setMind(newValue);
                    AsyncStorage.setItem("mindCheckbox", newValue.toString());
                    
                    if (newValue) {
                      setCompletedMindTasks(completedMindTasks + 1);
                    } else {
                      setCompletedMindTasks(completedMindTasks - 1);
                    }
                  }}
                  color={mind ? '#ffbe56' : '#383838'}
                />

                </View>
            </View>
            




            <View style={styles.tasksStage}>
                <View style={styles.icon}>
                     <Image style={styles.icons} source={require('./assets/bottomNavBar/weightBlack.png')} />
                </View>
                <View style={styles.body}>
                     <Text style={styles.eachTaskHeading}>BODY</Text>
                     <Text style={styles.taskDesc}>{bodyTask}</Text>
                </View>
                <View style={styles.check}>
                <Checkbox
                  style={styles.checkbox}
                  value={body}
                  onValueChange={(newValue) => {
                    setBody(newValue);
                    AsyncStorage.setItem("bodyCheckbox", newValue.toString());
                    
                    if (newValue) {
                      setCompletedMindTasks(completedBodyTasks + 1);
                    } else {
                      setCompletedMindTasks(completedBodyTasks - 1);
                    }
                  }}
                  color={body ? '#ffbe56' : '#383838'}
                />

                </View>
            </View>




            <View style={styles.tasksStage}>
                <View style={styles.icon}>
                      <Image style={styles.icons} source={require('./assets/bottomNavBar/mealBlack.png')} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.eachTaskHeading}>MEALS</Text>
                    <Text style={styles.taskDesc}>{mealTask}</Text>
                </View>
                <View style={styles.check}>
                <Checkbox
                  style={styles.checkbox}
                  value={meals}
                  onValueChange={(newValue) => {
                    setMeals(newValue);
                    AsyncStorage.setItem("mealCheckbox", newValue.toString());
                    
                    if (newValue) {
                      setCompletedMindTasks(completedMealTasks + 1);
                    } else {
                      setCompletedMindTasks(completedMealTasks - 1);
                    }
                  }}
                  color={meals ? '#ffbe56' : '#383838'}
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