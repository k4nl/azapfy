import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header'

describe('Testing Header.jsx', () => {
  test('If the header component is in DOM', () => {
    render(<Header />);
    const logoImage = screen.getByRole('img', { name: 'azapfy-logo' });
    const headerTag = screen.getByRole('banner');
    expect(logoImage).toBeInTheDocument();
    expect(headerTag).toBeInTheDocument();
  });
});
