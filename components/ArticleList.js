import React from 'react'
import Link from 'next/link'

import articleStyles from '../styles/Article.module.css'

function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.length > 0 && articles.map(article => (
        <Link key={article.id} href='article/[id]' as={`/article/${article.id}`}>
          <a className={articleStyles.card}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default ArticleList
