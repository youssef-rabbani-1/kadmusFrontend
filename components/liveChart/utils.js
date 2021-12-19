export const formatData = (data) => {
  let finalData = {
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        backgroundColor: "linear-gradient(#5052c7, #ffff)",
        borderColor: "rgb(69, 67, 201, 0.8)",
        fill: false,
      },
    ],
  }

  let dates = data.map((val) => {
    const ts = val[0]
    let date = new Date(ts * 1000)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let final = `${month}-${day}-${year}`
    return final
  })

  let priceArr = data.map((val) => {
    return val[4]
  })

  priceArr.reverse()
  dates.reverse()
  finalData.labels = dates.slice(-40)
  finalData.datasets[0].data = priceArr.slice(-40)
  return finalData
}
