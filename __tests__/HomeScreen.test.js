import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { auth } from '../firebase';

// Mock the Firebase auth module
jest.mock('../firebase', () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
  },
  firestore: {},
}));

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test 1: Check if the HomeScreen renders correctly
  it('renders the HomeScreen', async () => {
    const { getByTestId } = render(<HomeScreen />);
    const logo = getByTestId('logo');
    expect(logo).toBeTruthy();
  });

  // Test 2: Check if the TopInfoComponent is rendered in the HomeScreen
  it('renders the TopInfoComponent', async () => {
    const { getByTestId } = render(<HomeScreen />);
    const topInfoComponent = getByTestId('topInfoComponent');
    expect(topInfoComponent).toBeTruthy();
  });

  // Test 3: Check if the InspoComponent is rendered in the HomeScreen
  it('renders the InspoComponent', async () => {
    const { getByTestId } = render(<HomeScreen />);
    const inspoComponent = getByTestId('inspoComponent');
    expect(inspoComponent).toBeTruthy();
  });

  // Test 4: Check if the TasksComponent is rendered in the HomeScreen
  it('renders the TasksComponent', async () => {
    const { getByTestId } = render(<HomeScreen />);
    const tasksComponent = getByTestId('tasksComponent');
    expect(tasksComponent).toBeTruthy();
  });

  // Additional tests can be added here, if needed
});
