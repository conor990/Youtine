import { StyleSheet, ScrollView, Text, View, SafeAreaView, Image, Button, TextInput, TouchableOpacity, ActivityIndicator, Keyboard} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
//import { ActivityIndicator } from 'react-native-web';
import { FlatList } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function MealsScreen({ navigation }){
    const [recipes, setRecipes]  = useState();
    const [searchQuery, setSearchQuery]  = useState('');
    const [numberOfRecipes, setNumberOfRecipes]  = useState('1');
    const [loading, setLoading]  = useState(false);

    const apiId = 'a2cdda19'
    const apiKey = `00f81d0073ba81a4470bdbc2c66a5e1a`
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;

    async function apiCall() {
      setLoading(true);
      let resp = await fetch(apiUrl);
      let respJson = await resp.json();
      setRecipes(respJson.hits);
      setLoading(false);
      Keyboard.dismiss();
      setSearchQuery('');
    }
    

    useEffect(() => {
      setLoading(true)
      apiCall()
    }, [])

    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../components/assets/logoLong.png')} />
  
        <View style={styles.mainStage}>

          <View style={{width:'95%'}}>
            <Text style={styles.PageHeading}>Find a meal that looks good ! </Text>
          </View>




          <View style={styles.SearchInputView}>
            <TextInput placeholder='Search Meals...'
             style={styles.inputField} 
             onChangeText={text => setSearchQuery(text)}
            />

            <TextInput style={[styles.inputField, {width:'19%', fontSize:18, marginLeft:15, color:'#6e9f7b', fontWeight: 'bold'}]}
             keyboardType='number-pad'
             onChangeText={text => setNumberOfRecipes(text)}
             value={numberOfRecipes}
            />
          </View>




          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} title='submit' onPress={apiCall}>             
              <Text style={styles.buttonText}> Search </Text>
            </TouchableOpacity>
          </View>



          <SafeAreaView style={styles.SAview}> 
              {loading ? <ActivityIndicator size='large' color='#6e9f7b'/>  : 
              <FlatList 
              style={styles.recipes}
              data={recipes}
              renderItem={({item}) => (
                <View style={styles.recipe}>
                  <Image style={styles.image}
                  source={{uri: `${item.recipe.image}`}}
                  />
                  <View style={{padding:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.label}> {item.recipe.label}</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('MealDetails', {recipe: item.recipe})}}>
                        <Text style={{marginLeft:50, fontSize:20, color:'#689f7b'}}>
                            Details
                        </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()} />}
          </SafeAreaView>


        
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
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
  },


  logo: {
    width:155,
    height:30,
    margin:20,
    marginTop:50
  },


  PageHeading: {
    fontFamily:'Helvetica-Bold',
    color:'#383838',
    fontSize:25,
    textAlign:'left',
    margin:25,
    marginTop:30,
    marginBottom:10,
  },


  inputField: {
    height : 42,
    width: '64%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 15
  },

  SearchInputView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
  },

  buttonView: {
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 25
  },
  buttons: {
    flexDirection: 'row',
  },
  button : {
    backgroundColor: '#6e9f7b',
    width: '88%',
    alignItems: 'center',
    height: 40, 
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10
  },

  buttonText: {
    color: 'white', 
    fontSize: 20,
    fontWeight: 'bold'
  },

  SAview : {
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems: 'center',

  },

  recipes: {
    width: '100%',
  },

  loadingIcon: {
    width: '100%'
  },


  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },

  label: {
    //margin
    fontSize: 18,
    width: '60%',
    color: '#6e9f7b',
    fontWeight: '700'
  },

  recipe: {
    shadowColor: 'black',
    width: '88%',
    marginLeft:25,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 40,
  }

});
