import { render, screen } from '@testing-library/react';
import FirstPosts from '../pages/posts/first-post';

describe('FirstPosts', () => {
  it('renders a heading', () => {
    render(<FirstPosts />);

    const heading = screen.getByRole('heading', {
      name: /First Post/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
