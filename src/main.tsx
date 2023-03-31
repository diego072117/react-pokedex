import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.scss'
import { Home, PokeDetail } from './pages'

const router = createBrowserRouter([
 {
  path: '/',
  element: <Home/>
 },
 {
  path: '/:pokeId',
  element: <PokeDetail/>
 }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
