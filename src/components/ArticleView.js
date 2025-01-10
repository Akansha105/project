import React from 'react'
import { useParams } from 'react-router-dom'
import './ArticleView.css'

const ArticleView = () => {
  const { id } = useParams()
  // Simulate fetching article data
  const article = {
    id,
    title: 'Sample Article',
    content: '<p>This is the content of the article.</p>',
    lastEdited: '2025-01-01',
    readingTime: '5 min',
  }

  return (
    <div className="article-view">
      <header>
        <h1>{article.title}</h1>
        <p>Last Edited: {article.lastEdited}</p>
        <p>Reading Time: {article.readingTime}</p>
      </header>
      <article dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

export default ArticleView
