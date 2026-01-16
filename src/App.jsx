// import Header from "./components/Header"
import Main from "./components/Main.jsx"
import React from "react";
import pad from './pad.js';
import Pad from "./components/Pad.jsx";
export default function App() {
  const [data, setData] = React.useState(pad)
  function toggle(id) {
    setData(prev => prev.map(item => item.id === id ? { ...item, on: !item.on } : { ...item }))
  }

  const buttons = data.map(item => <Pad key={item.id} id={item.id} color={item.color} on={item.on} toggle={toggle} />)
  return (
    <main>
      <div className='pad-container'>
        {buttons}
      </div>
    </main>
    // <>
    //   <Header />
    //   <Main />
    // </>
  )
}