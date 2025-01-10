import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      const response = [
        {
          id: 1,
          title: 'React Basics',
          excerpt: 'Learn React basics.',
          category: 'Technology',
          lastEdited: '2025-01-01',
        },
        {
          id: 2,
          title: 'Health Tips',
          excerpt: 'Stay healthy.',
          category: 'Health',
          lastEdited: '2025-01-02',
        },
        {
          id: 3,
          title: 'Life Style',
          excerpt: 'Stay Motivated.',
          category: 'Stay Focused and Stay Screen Free',
          lastEdited: '2025-01-02',
        },
      ]
      setArticles(response)
    }
    fetchArticles()
  }, [])

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.length === 0 || filters.includes(article.category))
  )

  return (
    <div className="homepage">
      <header>
        <h1>ArticleHub</h1>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filters">
          {['Technology', 'Health', 'LifeStyle'].map((category) => (
            <button
              key={category}
              onClick={() =>
                setFilters((prevFilters) =>
                  prevFilters.includes(category)
                    ? prevFilters.filter((f) => f !== category)
                    : [...prevFilters, category]
                )
              }
              className={filters.includes(category) ? 'active' : ''}
            >
              {category}
            </button>
          ))}
          <Link to={`/create`}style={{color:"black",textDecoration:"none"}}>Create</Link>
        </div>
      </header>
      <div className="article-list">
        {filteredArticles.map((article) => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <p>Category: {article.category}</p>
            <p>Last Edited: {article.lastEdited}</p>
            <Link to={`/article/${article.id}`}>Read More</Link>
            <p>
              <button>
                <Link to={`/edit/${article.id}`} style={{color:"white",textDecoration:"none"}}>Edit</Link>
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
