import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import HerosProvider from '../context/HerosProvider';
import HerosRow from '../components/HerosRow';
import App from '../App';

import heros from './__mocks/mockedData'

// const mockFetch = require('./__mocks/mockApi')

describe('Testing HerosProvider.jsx', () => {
  
  beforeEach(() => {
    global.fetch = jest.fn(() => {
        return Promise.resolve({
          json: () => Promise.resolve(heros)
        })
      });
  });
  
    it('If card is rendered', async () => {
      
      render(<App />)
      // const getCard = await screen.findByText('Abe Sapien', {}, { timeout: 4000});
      const getCard = await screen.findByTestId('Abe Sapien-1', {}, { timeout: 4000});
      expect(getCard).toBeInTheDocument();
    });

})
