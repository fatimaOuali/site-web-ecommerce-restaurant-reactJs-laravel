import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from './router/index.jsx'

export default function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

