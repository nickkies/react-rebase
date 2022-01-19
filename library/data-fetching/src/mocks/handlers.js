import { rest } from 'msw';

console.log(rest);
const todos = [
  { id: `1`, title: `nick 1` },
  { id: `2`, title: `nick 2` },
  { id: `3`, title: `nick 3` },
  { id: `4`, title: `nick 4` },
  { id: `5`, title: `nick 5` },
];

export const handlers = [
  rest.get('http://localhost:3000/api/projects', async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get('page');

    return res(
      ctx.json({
        projects: [
          { id: `1 ${pageIndex}`, name: `nick 1-${pageIndex}` },
          { id: `2 ${pageIndex}`, name: `nick 2-${pageIndex}` },
          { id: `3 ${pageIndex}`, name: `nick 3-${pageIndex}` },
          { id: `4 ${pageIndex}`, name: `nick 4-${pageIndex}` },
          { id: `5 ${pageIndex}`, name: `nick 5-${pageIndex}` },
        ],
        hasMore: pageIndex < 4,
        nextCursor: pageIndex < 4 ? parseInt(pageIndex + 1) : false,
      })
    );
    // return res(ctx.status(400));
  }),
  rest.post('http://localhost:3000/api/todo', async (req, res, ctx) => {
    const { todo } = req.body;
    todos.push(todo);
    return res(ctx.json(true));
  }),
  rest.get('http://localhost:3000/api/todos', async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.get('http://localhost:3000/api/user/:userId', async (req, res, ctx) => {
    const { userId } = req.params;

    return res(
      ctx.json({
        name: 'Nick' + userId,
      })
    );
    // return res(ctx.status(400));
  }),
  rest.get('http://localhost:3000/api/users', async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get('page');

    return res(
      ctx.json([
        { id: `1 ${pageIndex}`, name: `nick 1-${pageIndex}` },
        { id: `2 ${pageIndex}`, name: `nick 2-${pageIndex}` },
        { id: `3 ${pageIndex}`, name: `nick 3-${pageIndex}` },
        { id: `4 ${pageIndex}`, name: `nick 4-${pageIndex}` },
        { id: `5 ${pageIndex}`, name: `nick 5-${pageIndex}` },
      ])
    );
    // return res(ctx.status(400));
  }),
];
