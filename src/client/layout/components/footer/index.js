import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      {"Ship, "}
      {year}
      {" © All rights reserved"}
    </footer>
  )
}

export default Footer
