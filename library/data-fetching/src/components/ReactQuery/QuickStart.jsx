import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import GlobalLoader from './GlobalLoader';
import { getTodos, postTodo } from './my-api';

export default function QuickStart() {
  const queryClient = useQueryClient();

  const query = useQuery('todos', getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  if (query.isLoading) {
    return 'Loading...';
  }

  if (query.error) {
    return 'Error...';
  }

  return (
    <div>
      {/* {query.isFetching && <div>Refresh</div>} */}
      <GlobalLoader />
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Learn React Query',
          });
        }}
      >
        Add todo
      </button>
    </div>
  );
}
