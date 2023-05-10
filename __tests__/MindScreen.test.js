import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import MindScreen from '../screens/MindScreen';

describe('MindScreen', () => {
  test('renders the MindScreen component', async () => {
    const { getByTestId } = render(<MindScreen />);
    const scrollViewInspo = getByTestId('scroll-view-inspo');
    const scrollViewNotes = getByTestId('scroll-view-notes');
    
    await waitFor(() => {
      expect(scrollViewInspo).toBeDefined();
      expect(scrollViewNotes).toBeDefined();
    });
  });
});
