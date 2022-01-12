import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/todo', async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: 'Todo from server',
        },
      })
    );
  }),
  rest.put('http://localhost:3000/counter/increment', async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
];
