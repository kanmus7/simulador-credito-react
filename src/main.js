import React, { useState } from "react";
import './styles/main/main.css';
import { DataSection } from './components/sketch/DataSection.jsx'
import { ArticleResults } from './components/sketch/ArticleResults.jsx'
import { CalculateButton } from './components/sketch/CalculateButton.jsx'

function App() {
  const [userName, setUserName] = useState({ value: '', valid: null })
  const [credit, setCredit] = useState({ value: '', valid: null })
  const [val, setVal] = useState(22)
  const [totalRate, setTotalRate] = useState({ value: 1.2 })
  const [btnClick, setBtnClick] = useState(false)
  
  return (
    <>
      <div className="general">
        <DataSection totalRate={totalRate} setTotalRate={setTotalRate}
          userState={userName} setUserState={setUserName}
          creditState={credit} setCreditState={setCredit}
          rangeValue={val} setRangeValue={setVal}
        />
        <ArticleResults totalRate={totalRate} userState={userName} creditState={credit} btnClick={btnClick}  moths = {val}/>
      </div>
      <CalculateButton setBtnClick={setBtnClick} userState={userName} creditState={credit} />
    </>
  )
}

export default App;