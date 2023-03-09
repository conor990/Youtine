import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

  const BottomNavComponent = ({navigation}) => {
    return(
        <View style = {{
            justifyContent:'flex-end',
            bottom: 0,
        }}>

            <View style={styles.bottomNav}>
              <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}>
                <Image style={styles.icons} source={require('./assets/bottomNavBar/homeGreen.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate('MindScreen')}>
                <Image style={styles.icons} source={require('./assets/bottomNavBar/brainBlack.png')} />
              </TouchableOpacity>

              <Image style={styles.icons} source={require('./assets/bottomNavBar/weightBlack.png')} />
              <Image style={styles.icons} source={require('./assets/bottomNavBar/mealBlack.png')} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

  bottomNav: {
    backgroundColor: '#E5E5E5',
    height:50,
    width: 320,
    marginTop:20,
    borderRadius: 30,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    shadowColor:'grey',

    shadowOffset: {
      width:1,
      height: 4
    },
    shadowOpacity:10

  },


  icons: {
    width: 30,
    height: 30,
    shadowColor:'grey',

    shadowOffset: {
      width:.5,
      height: .5
    },
    shadowOpacity:1,
  }
});

export default BottomNavComponent;