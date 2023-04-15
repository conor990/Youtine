import BottomNavComponent from '../components/BottomNav';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';

export default function MealsScreen({ navigation }){
    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../components/assets/logoLong.png')} />
  
        <View style={styles.mainStage}>
  


        
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
