import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const API_URL = 'https://zenquotes.io/api/today';

const InspoComponent = () => {
  const [quote, setQuote] = useState(null);
  const [previousQuotes, setPreviousQuotes] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const quoteText = data[0].q;
        setPreviousQuotes([...previousQuotes, quoteText]);
        setQuote(quoteText);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuote();
  }, []);

  return (
    <View>
      <View style={styles.inspo}>
        <Text style={styles.TheText}>{quote ? `"${quote}"` : 'Loading...'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inspo: {
    backgroundColor: '#FBFBFB',
    height: 110,
    width: 370,
    borderRadius: 15,
    marginTop: 20,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, //elevation is for android & shadow props are for ios
  },

  TheText: {
    fontSize: 25,
    fontFamily: 'AmericanTypewriter-CondensedLight',
    textAlign: 'center',
    padding: 14,
  },
});

export default InspoComponent;
