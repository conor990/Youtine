import { StyleSheet, View, Text} from 'react-native';

const TopInfoComponent = () => {
return (
    <View style={{
        width:'100%',
        justifyContent:'space-evenly',
        flexDirection:'row',
    }}>
        <View style={styles.topInfo}>
            <Text style={styles.leftText}>🌤️ 22°</Text>
        </View>

        <View style={styles.topInfo}>
            <Text style={styles.StreakNumber}>🔥 18</Text>
            <Text style={styles.StreakText}>Day {"\n"}Streak</Text>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    topInfo: {
        backgroundColor:'#FBFBFB',
        height:70,
        width:165,
        borderRadius:'25px',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center',
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


      leftText:{
        fontSize:50,
        fontFamily: 'Helvetica-Bold',
        color:'#383838',
        textAlign:'center',
      },


      StreakNumber:{
        fontSize:40,
        fontFamily: 'Helvetica-Bold',
        color:'#383838',
        textAlign:'center',
      }
})


export default TopInfoComponent;


