import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
    import Button from 'react-bootstrap/Button';
import Section2 from './components/projectManagment'
import Section3 from './components/workTogether'
import Section4 from './components/useAsExtension'
import Section5 from './components/customizeIt'
import Section7 from './components/yourWork'
import Section8 from './components/yourData'
import Section10 from './components/workWith'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section7/>
     <Section8/>
     <Section10/>
     
    </>
  )
}

export default App
