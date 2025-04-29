import { useState } from "react";
import GridSelector from "./components/Grid"
import Navbar from './components/Navbar'

function App() {
  const [isEditable, setIsEditable] = useState(true);
  const number = 20;

  return (
    <div className="bg-slate-600 w-screen h-screen overflow-hidden">
      <Navbar/>

      <GridSelector size={number} isEditable={isEditable}/>
    </div>
  )
}

export default App

