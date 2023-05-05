import { StyleSheet, Text, View, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TasksComponent(){

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

  const generateRandomTask = (tasks) => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };
  
  const [tasks, setTasks] = useState([]);

  const storeTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error("Error storing tasks:", error);
    }
  };

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };
  
  const generateNewTasks = () => {
    const newTasks = [
      { id: 1, type: 'mind', title: generateRandomTask(mindTasks), completed: false },
      { id: 2, type: 'body', title: generateRandomTask(bodyTasks), completed: false },
      { id: 3, type: 'meal', title: generateRandomTask(mealTasks), completed: false },
    ];
    setTasks(newTasks);
    storeTasks(newTasks);
  };
  
  // Inside your main component or a suitable parent component
  useEffect(() => {
    const checkAndGenerateTasks = async () => {
      const storedTimestamp = await AsyncStorage.getItem('@tasksTimestamp');
      const currentTime = new Date().getTime();

      if (storedTimestamp === null || currentTime - storedTimestamp >= 24 * 60 * 60 * 1000) {
        generateNewTasks();
        await AsyncStorage.setItem('@tasksTimestamp', JSON.stringify(currentTime));
      } else {
        loadTasks();
      }
    };

    checkAndGenerateTasks();
  }, []);
  

  const updateTasksCompleted = (type, increment) => {
    setTasksCompleted(prevState => {
      const newValue = increment ? prevState[type] + 1 : prevState[type] - 1;
      return { ...prevState, [type]: newValue };
    });
  };

  const storeTasksCompleted = async (newTasksCompleted) => {
    try {
      await AsyncStorage.setItem('@tasksCompleted', JSON.stringify(newTasksCompleted));
    } catch (error) {
      console.error("Error storing tasksCompleted:", error);
    }
  };
  
  const loadTasksCompleted = async () => {
    try {
      const storedTasksCompleted = await AsyncStorage.getItem('@tasksCompleted');
      if (storedTasksCompleted !== null) {
        setTasksCompleted(JSON.parse(storedTasksCompleted));
      }
    } catch (error) {
      console.error("Error loading tasksCompleted:", error);
    }
  };

  const checkAndGenerateTasks = async () => {
    const storedTimestamp = await AsyncStorage.getItem('@tasksTimestamp');
    const currentTime = new Date().getTime();
  
    if (storedTimestamp === null || currentTime - storedTimestamp >= 24 * 60 * 60 * 1000) {
      generateNewTasks();
      await AsyncStorage.setItem('@tasksTimestamp', JSON.stringify(currentTime));
      storeTasksCompleted({ mind: 0, body: 0, meal: 0 });
    } else {
      loadTasks();
      loadTasksCompleted();
    }
  };


  useEffect(() => {
    checkAndGenerateTasks();
  }, []);
  
  



    return (
      <View>
          <View style={{width:'100%'}}>
            <Text style={styles.todaysTasksHeading}>Today's Tasks</Text>
          </View> 

        {tasks.map((task) => {
          let iconSource;
          switch (task.type) {
            case 'mind':
              iconSource = require('./assets/bottomNavBar/brainBlack.png');
              break;
            case 'body':
              iconSource = require('./assets/bottomNavBar/weightBlack.png');
              break;
            case 'meal':
              iconSource = require('./assets/bottomNavBar/mealBlack.png');
              break;
          }
  
          return (
            <View style={styles.tasksStage} key={task.id}>

              <View style={styles.icon}>
                <Image style={styles.icons} source={iconSource} />
              </View>
              <View style={styles.body}>
                <Text style={styles.eachTaskHeading}>{task.type.toUpperCase()}</Text>
                <Text style={styles.taskDesc}>{task.title}</Text>
              </View>
              <View style={styles.check}>
              <Checkbox
                  style={styles.checkbox}
                  value={task.completed}
                  onValueChange={(newValue) => {
                    setTasks(
                      tasks.map((t) =>
                        t.id === task.id ? { ...task, completed: newValue } : t
                      )
                    );
                    updateTasksCompleted(task.type, newValue);
                  }}
                  color={task.completed ? '#ffbe56' : '#fff'}
                />

              </View>
            </View>
          );
        })}
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

 