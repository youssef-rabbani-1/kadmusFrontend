import React, { useState, useEffect, useRef } from "react"
import Dashboard from "./components/Dashboard"
import { formatData } from "./utils"

export default function App({ pair }) {
  const [pastData, setpastData] = useState({})

  const url = "https://api.pro.coinbase.com"

  let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`
  const fetchHistoricalData = async () => {
    let dataArr = []
    await fetch(historicalDataURL)
      .then((res) => res.json())
      .then((data) => (dataArr = data))
    let formattedData = formatData(dataArr)
    setpastData(formattedData)
  }

  fetchHistoricalData()

  return (
    <div className="container">
      <Dashboard data={pastData} />
    </div>
  )
}
