import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './phaser/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contain mx-auto
      w-full
      flex flex-row justify-center items-center
      pt-24
      ">
          <Game/>
      </div>
    </>
  )
}

export default App
