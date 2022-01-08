import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '../components/Footer'

describe('Testing Footer.jsx', () => {
  test('If the Footer component is in DOM', async () => {
    render(<Footer />);
    const gustavoBraga = screen.getByText('Gustavo Braga');
    const githubLink = await screen.findByTestId('github-link');
    const linkedinLink = await screen.findByTestId('linkedin-link');


    expect(gustavoBraga).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute('href','https://github.com/k4nl')
    expect(linkedinLink).toHaveAttribute('href','https://www.linkedin.com/in/gustavo-luis-de-moura-braga-3a524159/')

    fireEvent.click(githubLink);
    expect(githubLink).toBeInTheDocument();

    fireEvent.click(linkedinLink);
    expect(linkedinLink).toBeInTheDocument();
  });

});
