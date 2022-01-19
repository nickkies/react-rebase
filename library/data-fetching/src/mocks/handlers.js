import { rest } from 'msw';

export const handlers = [
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
