import React, { useState, useEffect, useRef } from "react"
import Dashboard from "./components/Dashboard"
import { formatData } from "./utils"

export default function App() {
  const [currencies, setcurrencies] = useState([])
  const [pair, setpair] = useState("")
  const [price, setprice] = useState("0.00")
  const [pastData, setpastData] = useState({})

  const ws = useRef(null)
  let first = useRef(false)
  const url = "https://api.pro.coinbase.com"

  useEffect(() => {
    //connect to websocket API
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com")
    let pairs = []

    //inside useEffect we need to make API with async function
    const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data))

      //coinbase returns over 120 currencies, this will filter to only USD based pairs
      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          return pair
        }
      })
      //sort filtered currency pairs alphabetically
      filtered = filtered.sort((a, b) => {
        if (a.base_currency < b.base_currency) {
          return -1
        }
        if (a.base_currency > b.base_currency) {
          return 1
        }
        return 0
      })
      //console.log(filtered)

      setcurrencies(filtered)

      first.current = true
    }

    //call async function
    apiCall()
  }, [])

  useEffect(() => {
    if (!first.current) {
      //console.log("returning on first render")
      return
    }

    //console.log("running pair change")
    let msg = {
      type: "subscribe",
      product_ids: [pair],
      channels: ["ticker"],
    }
    let jsonMsg = JSON.stringify(msg)
    ws.current.send(jsonMsg)

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=3600`
    const fetchHistoricalData = async () => {
      let dataArr = []
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data))

      let formattedData = formatData(dataArr)
      setpastData(formattedData)
    }

    fetchHistoricalData()

    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data)
      if (data.type !== "ticker") {
        //console.log("non ticker event", e)
        return
      }

      if (data.product_id === pair) {
        setprice(data.price)
      }
      //console.log(data.price)
    }
  }, [pair])
  const handleSelect = (e) => {
    let unsubMsg = {
      type: "unsubscribe",
      product_ids: [pair],
      channels: ["ticker"],
    }
    let unsub = JSON.stringify(unsubMsg)

    ws.current.send(unsub)

    setpair(e.target.value)
  }
  return (
    <div className="container">
      {
        <select name="currency" value={pair} onChange={handleSelect}>
          {currencies.map((cur, idx) => {
            return (
              <option key={idx} value={cur.id}>
                {cur.display_name}
              </option>
            )
          })}
        </select>
      }
      {<Dashboard price={price} data={pastData} />}{" "}
    </div>
  )
}
