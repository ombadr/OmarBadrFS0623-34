import MyJumbotron from '../components/MyJumbotron';
import { render, screen } from '@testing-library/react';

describe('MyJumbotron mounting', () => {
  it('component renders correctly', () => {
    render(<MyJumbotron />);
    const jumbotron = screen.getByText('Welcome to EpiBooks!');
    expect(jumbotron).toBeInTheDocument();
  });
});
