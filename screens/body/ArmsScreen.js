import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView} from 'react-native';
import { WebView } from 'react-native-webview';
import { Video, ResizeMode } from 'expo-av';



export default function ArmsScreen({ navigation }){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return(
        
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../components/assets/logoLong.png')} />
            <View style={styles.mainStage}>

             <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollviewstyle} >
                
            <View style={styles.headings}>
                <Text>arms</Text>
            </View>

            <Image
                source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/Arms1.gif' }}
                style={styles.videos}
                resizeMode="contain"
             />

            <View style={styles.headings}>
                <Text>arms</Text>
            </View>

            <Image
                source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/arms2.gif' }}
                style={styles.videos}
                resizeMode="contain"
             />

            <View style={styles.headings}>
                <Text>arms</Text>
            </View>

            <Image
                source={{ uri: 'https://youtinebodypagevideo.s3.eu-west-1.amazonaws.com/arms3.gif' }}
                style={styles.videos}
                resizeMode="contain"
             />



                  
  
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

scrollView: {
    height: '95%',
    marginTop:1
},
scrollviewstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

videos: {
    width:'90%',
    height:200,
},

headings: {
    width:'100%'
},



});
