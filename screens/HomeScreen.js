import * as React from 'react';
import { StyleSheet, View, Image,} from 'react-native';
import InspoComponent from '../components/inspo';
import TopInfoComponent from '../components/topInfo';
import TasksComponent from '../components/tasks';
import { auth,} from '../firebase';


export default function HomeScreen({ navigation }) { 
  
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
            setCurrentUser(user);
        }
    })
    return unsubscribe;
  }, []);

  return (

      <View style={styles.container}>
        <Image 
         style={styles.logo}
         source={require('../components/assets/logoLong.png')}
         testID="logo" />

        <View style={styles.mainStage}>

        <TopInfoComponent currentUser={currentUser} testID="topInfoComponent" />

        <InspoComponent testID="inspoComponent" />

        <TasksComponent testID="tasksComponent" />

        
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


});
