import React from "react"

export default function App({ href, children }) {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  )
}
