import React from 'react';
import { render } from '@testing-library/react';
import CommentList from '../components/CommentList';

describe('CommentList', () => {
  it('SingleComment non viene renderizzato di default se non ci sono commenti e se nessuna card è selezionata', () => {
    const { queryByTestId } = render(<CommentList commentsToShow={[]} />);

    const singleComment = queryByTestId('single-comment');

    expect(singleComment).not.toBeInTheDocument();
  });
});
