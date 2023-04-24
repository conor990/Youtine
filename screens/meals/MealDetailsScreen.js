import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function MealDetailsScreen({ navigation }){
    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../components/assets/logoLong.png')} />
  
        <View style={styles.mainStage}>
  
            <ScrollView>
                <View style={styles.details}>
                    <View style={styles.item}>
                        <Text style={styles.Ingredients}>
                            Ingredients:
                        </Text>
                    </View>

                </View>
            </ScrollView>
        
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

  Ingredients: {
    fontSize: 22,
    color: '#6e9f7b',
    fontWeight: '800'
  }
});
