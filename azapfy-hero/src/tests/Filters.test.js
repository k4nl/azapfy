import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Filters from '../components/Filters';

describe('Testing Filters.jsx', () => {

  test("If the name's input filter is in DOM", () => {
    render(<Filters />);
    const nameFilterLabel = screen.getByText('Name');
    const inputNameFilter = document.querySelector('#name-input-filter')
    expect(nameFilterLabel).toBeInTheDocument();
    expect(inputNameFilter).toBeInTheDocument();
  });

  test("If the race's input filter is in DOM", () => {
    render(<Filters />);
    const raceFilterLabel = screen.getByText('Race');
    const inputRaceFilter = document.querySelector('#race-input-filter');
    expect(raceFilterLabel).toBeInTheDocument();
    expect(inputRaceFilter).toBeInTheDocument();
    
  });

  test("If the gender's input filter is in DOM", () => {
    render(<Filters />);
    const genderFilterLabel = screen.getByText('Gender');
    expect(genderFilterLabel).toBeInTheDocument();

    const inputGenderMaleFilter = document.querySelector('#gender-input-filter-0');
    const inputGenderFemaleFilter = document.querySelector('#gender-input-filter-1');
    expect(inputGenderMaleFilter).toBeInTheDocument();
    expect(inputGenderFemaleFilter).toBeInTheDocument();

    fireEvent.click(inputGenderMaleFilter);
    expect(inputGenderMaleFilter).toBeChecked();
    expect(inputGenderFemaleFilter).not.toBeChecked();

    fireEvent.click(inputGenderFemaleFilter);
    expect(inputGenderFemaleFilter).toBeChecked();
    expect(inputGenderMaleFilter).not.toBeChecked();

    const labelGenderMaleFilter = screen.getByTestId('gender-label-filter-0');
    const labelGenderFemaleFilter = screen.getByTestId('gender-label-filter-1');
    expect(labelGenderMaleFilter.textContent).toBe('male')
    expect(labelGenderFemaleFilter.textContent).toBe('female')

  });

  test("If the alignment's input filter is in DOM", () => {
    render(<Filters />);
    const alignmentFilterLabel = screen.getByText('Alignment');
    expect(alignmentFilterLabel).toBeInTheDocument();

    const inputAlignmentGoodFilter = document.querySelector('#alignment-input-filter-0');
    const inputAlignmentBadFilter = document.querySelector('#alignment-input-filter-1');
    const inputAlignmentNeutralFilter = document.querySelector('#alignment-input-filter-2');
    expect(inputAlignmentGoodFilter).toBeInTheDocument();
    expect(inputAlignmentBadFilter).toBeInTheDocument();
    expect(inputAlignmentNeutralFilter).toBeInTheDocument();

    fireEvent.click(inputAlignmentNeutralFilter);
    expect(inputAlignmentNeutralFilter).toBeChecked();
    expect(inputAlignmentBadFilter).not.toBeChecked();
    expect(inputAlignmentGoodFilter).not.toBeChecked();

    fireEvent.click(inputAlignmentGoodFilter);
    expect(inputAlignmentGoodFilter).toBeChecked();
    expect(inputAlignmentNeutralFilter).not.toBeChecked();
    expect(inputAlignmentBadFilter).not.toBeChecked();
    
    const labelalignmentGoodFilter = screen.getByTestId('alignment-label-filter-0');
    const labelAlignmentBadFilter = screen.getByTestId('alignment-label-filter-1');
    const labelAlignmentNeutralFilter = screen.getByTestId('alignment-label-filter-2');
    expect(labelalignmentGoodFilter.textContent).toBe('good')
    expect(labelAlignmentBadFilter.textContent).toBe('bad')
    expect(labelAlignmentNeutralFilter.textContent).toBe('neutral');

  });

  test("If the button filter is in DOM", () => {
    render(<Filters />);
    const filterButton = screen.getByTestId('filter');
    expect(filterButton).toBeInTheDocument();
    expect(filterButton.textContent).toBe('Filter');
    // if it starts with disabled
    expect(filterButton).toBeDisabled();
    // if someone select a filter, button should be enabled
    const inputAlignmentNeutralFilter = document.querySelector('#alignment-input-filter-2');
    fireEvent.click(inputAlignmentNeutralFilter);
    expect(filterButton).not.toBeDisabled();

  });

  test("If the refresh filter is in DOM", () => {
    render(<Filters />);
    const refreshButton = screen.getByTestId('clear');
    expect(refreshButton).toBeInTheDocument();
    expect(refreshButton.textContent).toBe('Refresh');

  });

});
