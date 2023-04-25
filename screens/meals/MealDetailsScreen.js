import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function MealDetailsScreen({ navigation, route}){
    const {recipe} = route.params;

    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../components/assets/logoLong.png')} />
  
        <View style={styles.mainStage}>
  
        <View style={styles.MainheadingsView}>
                <Text style={styles.MainworkoutHeading}>{`${recipe.label}`}</Text>
                <View style={{ marginBottom:35, borderBottomWidth: 1, borderBottomColor:'black', width:'80%', height:1 }} />
            </View> 

            <ScrollView style={styles.ScrollView}>
                <View style={styles.details}>

                <View style={styles.item}>
                        <Text style={styles.cardTitle}>
                            Calories:
                        </Text>
                        <Text style={styles.Ingredients}>
                            {`${recipe.calories}`}
                        </Text>
                    </View>



                    <View style={styles.item}>
                        <Text style={styles.cardTitle}>
                            Meal Type:
                        </Text>
                        <Text style={styles.Ingredients}>
                            {`${recipe.mealType}`}
                        </Text>
                    </View>

                    
                    <View style={styles.item}>
                        <Text style={styles.cardTitle}>
                            Cuisine :
                        </Text>
                        <Text style={styles.Ingredients}>
                            {`${recipe.cuisineType}`}
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.cardTitle}>
                            Ingredients:
                        </Text>
                        <Text style={styles.Ingredients}>
                            {`${recipe.ingredients.map((item) => item['food'])}`}
                        </Text>
                    </View>




                    <View style={styles.item}>
                        <Text style={styles.cardTitle}>
                            Description:
                        </Text>
                        <Text style={styles.Ingredients}>
                            {`${recipe.ingredientLines}`}
                        </Text>
                    </View>


                    <View style={styles.item}>
                        <Text style={styles.cardTitle}>
                            Diet Label:
                        </Text>
                        <Text style={styles.Ingredients}>
                            {`${recipe.dietLabels}`}
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

  cardTitle: {
    fontSize: 22,
    color: '#6e9f7b',
    fontWeight: '800'
  },

  details: {
    marginBottom: 30,
    padding: 5,
  },

  Ingredients: {
    fontSize: 20,
    color: '#383838'
  },

  item: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  MainworkoutHeading: {
    fontFamily:'Helvetica-Bold',
    fontSize:34,
    color:'#383838',
    margin:17,
    marginBottom: 10,
    marginTop:50
  },
  MainheadingsView: {
    width:'100%',
    alignItems:'center'
},
});
