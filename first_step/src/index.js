import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './components/Book'

function Greeting() {
  return (
    <>
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
