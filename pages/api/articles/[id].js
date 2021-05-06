import { articles } from '../../../data';

export default function handler({ query: { id }}, res) {
  // const { id } = req.query;
  const article = articles.filter(ele => ele.id === 1);

  if(article.length === 0) {
    res.status(404).json({ message: `Not found article`})
    return
  }
  res.status(200).json(article[0]);
}
