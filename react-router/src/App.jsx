import { RouterProvider } from 'react-router'
import routerFile from './routerFile'
import './App.css'

const App = () => {
  return (
    <>
      <RouterProvider router = {routerFile}/>
    </>
  )
}

export default App
