import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [freeLoad, setFreeLoad] = useState('')

  // runs when component is rendered
  useEffect(() => {
    // console.log('Component runs when rendered')
  })

  // on initial load only
  useEffect(() => {
    console.log('This component runs only on initial load')
  }, [])

  // dependent on the state variable ==> count
  useEffect(() => {
    console.log(`This runs only when the state variable changes ${count}`)
  }, [count, freeLoad])

  // destroy or remove component
  useEffect( () => {
    // alert('heyyyy!')
    // return () => alert("Goodbye Component")
  })

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setFreeLoad('Scam!')}>
          Click here for free load!
        </button>
        <h2>{freeLoad}</h2>
      </div>
    </>
  )
}

export default App
