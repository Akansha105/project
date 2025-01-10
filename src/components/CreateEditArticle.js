import React, { useState } from 'react'
import './CreateEditArticle.css'

const CreateEditArticle = () => {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ title, excerpt, content, category })
  }

  return (
    <div className="create-edit-article">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        ></textarea>

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Health">LifeStyle</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default CreateEditArticle
