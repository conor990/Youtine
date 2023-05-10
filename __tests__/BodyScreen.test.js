import React from 'react';
import { render } from '@testing-library/react-native';
import BodyScreen from '../screens/BodyScreen';

describe('BodyScreen', () => {

  // Test 1: Check if the BodyScreen renders correctly
  it('renders the BodyScreen', async () => {
    const { getByTestId } = render(<BodyScreen />);
  });

  // Test 2: Check if the Arms workout option is rendered in the BodyScreen
  it('renders the Arms workout option', async () => {
    const { getByTestId } = render(<BodyScreen />);
    const armsWorkoutOption = getByTestId('armsWorkoutOption');
    expect(armsWorkoutOption).toBeTruthy();
  });

  // Test 3: Check if the Chest workout option is rendered in the BodyScreen
  it('renders the Chest workout option', async () => {
    const { getByTestId } = render(<BodyScreen />);
    const chestWorkoutOption = getByTestId('chestWorkoutOption');
    expect(chestWorkoutOption).toBeTruthy();
  });

  // Test 4: Check if the Abs workout option is rendered in the BodyScreen
  it('renders the Abs workout option', async () => {
    const { getByTestId } = render(<BodyScreen />);
    const absWorkoutOption = getByTestId('absWorkoutOption');
    expect(absWorkoutOption).toBeTruthy();
  });

  // Test 5: Check if the Legs workout option is rendered in the BodyScreen
  it('renders the Legs workout option', async () => {
    const { getByTestId } = render(<BodyScreen />);
    const legsWorkoutOption = getByTestId('legsWorkoutOption');
    expect(legsWorkoutOption).toBeTruthy();
  });

  // Additional tests can be added here, if needed
});
