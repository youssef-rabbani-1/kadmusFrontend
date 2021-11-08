import React, { useState } from "react"
import { useSwipeable } from "react-swipeable"
import { Grid } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

export function CarouselItem({ children, width }) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  )
}

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })
  return (
    <div {...handlers} className="carousel">
      <Grid container item xs={12}>
        <Grid item xs={1} className="carousel-container">
          <div className="indicators">
            <IconButton
              aria-label="previous"
              onClick={() => {
                updateIndex(activeIndex - 1)
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            {/*  <button
              onClick={() => {
                updateIndex(activeIndex - 1)
              }}
            >
              prev
            </button>*/}
          </div>
        </Grid>
        <Grid item xs={10}>
          <div
            className="inner"
            style={{ transform: `translate(-${activeIndex * 250}px)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "200px" })
            })}
          </div>
        </Grid>
        <Grid item xs={1} className="carousel-container">
          <div className="indicators">
            <IconButton
              aria-label="next"
              onClick={() => {
                updateIndex(activeIndex + 1)
              }}
            >
              <NavigateNextIcon />
            </IconButton>
            {/* <button
              onClick={() => {
                updateIndex(activeIndex + 1)
              }}
            >
              Next
            </button>*/}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
