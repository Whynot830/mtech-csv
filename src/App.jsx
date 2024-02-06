import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Table from './pages/table/Table'
import Uploader from './pages/uploader/Uploader'
import { useState } from 'react'


function App() {
  const [csvData, setCsvData] = useState(localStorage.getItem('csvData'));

  const handleUpload = (fileData) => {
    localStorage.setItem('csvData', fileData)
    setCsvData(fileData)
  }
  const handleDelete = () => {
    localStorage.removeItem('csvData')
    setCsvData(null)
  }
  
  return (
    <>
      {csvData ? <Table onDelete={handleDelete} /> : <Uploader onUpload={handleUpload} />}
    </>
  )
}
export default App
