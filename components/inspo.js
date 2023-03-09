import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const InspoComponent = () => {
    return(
        <View>
            <View style={styles.inspo}>
                <Text style={styles.TheText}>“Just one small positive thought in the morning can change your whole day”</Text>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    inspo: {
        backgroundColor:'#FBFBFB',
        height:110,
        width:370,
        borderRadius:'15px',
        marginTop:20,

        shadowColor:'#000',

        shadowOffset: {
          width:0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, //elevation is for android & shadow props are for ios 
    
      },

    TheText: {
        fontSize:25,
        fontFamily:'AmericanTypewriter-CondensedLight',
        textAlign:'center',
        padding:14,
    }
});

export default InspoComponent;