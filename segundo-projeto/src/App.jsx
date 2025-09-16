import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'
import OtherComponet from './components/OtherComponet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyComponents/>
     <p>Este parágrafo é do App.jsx</p>
     <OtherComponet/>
    </>
  )
}

export default App
