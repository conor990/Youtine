import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MealsScreen from '../screens/MealsScreen';

describe('MealsScreen', () => {
  // ... previous tests

  // Test 4: Check if the number of recipes input field is rendered
  it('renders the number of recipes input field', () => {
    const { getByTestId } = render(<MealsScreen />);
    const numberOfRecipesInput = getByTestId('number-of-recipes-input');
    expect(numberOfRecipesInput).toBeTruthy();
  });

  // Test 5: Check if the recipes list is rendered after the API call
  it('renders the recipes list', async () => {
    const { getByTestId } = render(<MealsScreen />);
    await waitFor(() => getByTestId('recipes-list'));
    const recipesList = getByTestId('recipes-list');
    expect(recipesList).toBeTruthy();
  });

  // Test 6: Test user interaction by simulating a search query input
  it('updates the search query input value', () => {
    const { getByPlaceholderText } = render(<MealsScreen />);
    const searchInputField = getByPlaceholderText('Search Meals...');
    fireEvent.changeText(searchInputField, 'chicken');
    expect(searchInputField.props.value).toBe('chicken');
  });

  // Additional tests can be added here, if needed
});
