import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import { render, fireEvent } from '@testing-library/react-native';

// Mock navigation prop
const mockNavigation = {
  navigate: jest.fn(),
  replace: jest.fn(),
  goBack: jest.fn(),
};

// Mock firebase auth methods
jest.mock('@firebase/auth', () => ({
  __esModule: true,
  default: jest.fn(),
  auth: jest.fn(),
}));

describe('LoginScreen', () => {
  it('renders the LoginScreen correctly', () => {
    const tree = render(<LoginScreen navigation={mockNavigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('allows users to enter email and password', () => {
    const { getByPlaceholderText } = render(<LoginScreen navigation={mockNavigation} />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, 'test@test.com');
    fireEvent.changeText(passwordInput, 'password');

    expect(emailInput.props.value).toEqual('test@test.com');
    expect(passwordInput.props.value).toEqual('password');
  });

  it('calls the handleLogin function when the Login button is pressed', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={mockNavigation} />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailInput, 'test@test.com');
    fireEvent.changeText(passwordInput, 'password');

    fireEvent.press(loginButton);

    // expect the auth.signInWithEmailAndPassword method to have been called with the correct arguments
    expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith('test@test.com', 'password');
  });

  it('calls the handleSignUp function when the Register button is pressed', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={mockNavigation} />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const registerButton = getByText('Register');

    fireEvent.changeText(emailInput, 'test@test.com');
    fireEvent.changeText(passwordInput, 'password');

    fireEvent.press(registerButton);

    // expect the auth.createUserWithEmailAndPassword method to have been called with the correct arguments
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith('test@test.com', 'password');

    // expect the createUserDocument function to have been called
    expect(createUserDocument).toHaveBeenCalled();
  });
});
