import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const API_KEY = '7ef91b6317c83faac722553f9853df51';
let city = 'Dublin,ie'
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;


const TopInfoComponent = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const temp = data.main.temp;
        setTemperature(temp);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTemperature();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.leftText}>🌡️ {temperature ? `${Math.round(temperature)}°` : '--'}</Text>
      </View>
      <View style={styles.topInfo}>
        <Text style={styles.StreakNumber}>🔥 18</Text>
        <Text style={styles.StreakText}>Day {"\n"}Streak</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  topInfo: {
    backgroundColor: '#FBFBFB',
    height: 70,
    width: 165,
    borderRadius: 25,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, //elevation is for android & shadow props are for ios
  },
  leftText: {
    fontSize: 50,
    fontFamily: 'Helvetica-Bold',
    color: '#383838',
    textAlign: 'center',
  },
  StreakNumber: {
    fontSize: 40,
    fontFamily: 'Helvetica-Bold',
    color: '#383838',
    textAlign: 'center',
  },
});

export default TopInfoComponent;
