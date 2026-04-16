import Navbar from "./Components/Navbar"
import {  useState } from "react";
import NewsBoard from "./Components/NewsBoard"


const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
