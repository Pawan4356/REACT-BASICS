import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Hello</a>
)

// Generally, libraries offer greater flexibility and control, while frameworks provide more structure.

// Custom Element created by us -> Won't work!
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank"
//   },
//   children: "Click to visit Google!"
// }

// Original syntax we can use in React! (Babel Transpiler)
const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'Googly Eyes!!'
)

createRoot(document.getElementById('root')).render(
  // <App />
  // Or
  App()
  // Or
  // anotherElement
  // Or
  // reactElement
)
