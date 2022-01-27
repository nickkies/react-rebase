export default function handler(req, res) {
  // 서버쪽에서 찍힘
  console.log('/api/hello');
  // res.status(200).json({ text: 'Hello' });
  res.redirect(307, '/api/bye');
}
