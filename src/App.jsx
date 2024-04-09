import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <video controls>
      <source src='https://iparhai-videos.s3.amazonaws.com/1712658790462_1712562176536_Your+video+title.mp4' />
    </video>
    </>
  )
}

export default App
