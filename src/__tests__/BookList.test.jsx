import BookList from '../components/BookList';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import fantasy from '../data/fantasy.json';

describe('check mounting', () => {
  it('verifica che vengano renderizzate tante bootstrap cards quante sono nel file json', () => {
    render(<BookList books={fantasy} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(fantasy.length);
  });

  it('verifica che viene renderizzato il componente CommentArea', () => {
    render(<BookList books={fantasy} />);

    const firstBook = screen.getAllByRole('img')[0];
    fireEvent.click(firstBook);

    const commentArea = screen.getByTestId('comment-area');
    expect(commentArea).toBeInTheDocument();
  });
});

describe('comportamento del filtro durante le ricerca', () => {
  it('restituire un tot di elementi corrispondenti al filtro', async () => {
    render(<BookList books={fantasy} />);

    const chiaveRicerca = screen.getByPlaceholderText(/Search here/i);

    fireEvent.change(chiaveRicerca, { target: { value: 'the last wish:' } });
    const elencoFiltrato = await screen.findAllByTestId('book-card-0316438960');

    expect(elencoFiltrato).toHaveLength(1);
  });
});

describe('Controllo del border della card', () => {
  const testBook = [
    {
      asin: '123',
      title: 'Test Book 1',
      img: 'test-img-1.jpg',
    },
    {
      asin: '456',
      title: 'Test Book 2',
      img: 'test-img-2.jpg',
    },
  ];

  it('applica il border alla card quando viene selezionata', () => {
    render(<BookList books={testBook} />);

    const card = screen.getByTestId('book-card-123');
    expect(card).toHaveStyle('border: none');

    fireEvent.click(card);
    expect(card).toHaveStyle('border: 3px solid red');
  });

  it('rimuove il border alla card quando viene deselezionata', () => {
    render(<BookList books={testBook} />);

    const firstCard = screen.getByTestId('book-card-123');
    const secondCard = screen.getByTestId('book-card-456');

    expect(firstCard).toHaveStyle('border: none');
    expect(secondCard).toHaveStyle('border: none');

    fireEvent.click(firstCard);
    expect(firstCard).toHaveStyle('border: 3px solid red');

    fireEvent.click(secondCard);
    expect(firstCard).toHaveStyle('border: none');
    expect(secondCard).toHaveStyle('border: 3px solid red');
  });
});
