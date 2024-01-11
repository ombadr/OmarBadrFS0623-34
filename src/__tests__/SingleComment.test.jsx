import React from 'react';
import { render, waitFor } from '@testing-library/react';
import SingleComment from '../components/SingleComment';
describe('SingleComment', () => {
  it('controllo se il singolo commento viene renderizzato', async () => {
    const testComment = { _id: 'comment1', comment: 'Comment 1' };
    const { getByText } = render(<SingleComment comment={testComment} />);

    await waitFor(() => {
      const comment1 = getByText('Comment 1');
      expect(comment1).toBeInTheDocument();
    });
  });
});
