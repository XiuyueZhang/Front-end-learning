import { useState } from 'react'
import { Outlet, Link, Navigate } from "react-router-dom"


function App() {

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
