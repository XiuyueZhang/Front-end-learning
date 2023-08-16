import { useState } from 'react'
import { Button } from "antd"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
      <div>
        App component
        <Button type='primary'>Hi, antd button here</Button>
        <Outlet />
      </div>
    </>
  )
}

export default App
