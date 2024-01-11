import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljMTVlYWUwZGQxZDAwMTgyZDE4MzUiLCJpYXQiOjE3MDQ3MjgwNDIsImV4cCI6MTcwNTkzNzY0Mn0.d3NYogX9x1Trv4HDeBugXlpKHp-yZ-GurJVZjxwKc_w',
          },
        }
      );
      if (response.ok) {
        alert('Comment was deleted successfully!');
      } else {
        alert('Error - comment was NOT deleted!');
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!');
    }
  };

  return (
    <ListGroup.Item data-testid='single-comment'>
      {comment.comment}
      <Button
        variant='danger'
        className='ml-2'
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
