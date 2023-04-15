import BottomNav from "../components/BottomNav";
import { StyleSheet, View, Text} from 'react-native';

export default function ProfileScreen({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.mainStage}>
                
                <BottomNav navigation={navigation} />
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
});
