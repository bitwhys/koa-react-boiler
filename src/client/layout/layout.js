import React from "react"
import PropTypes from "prop-types"

import Header from "./components/header"
import Footer from "./components/footer"

const Layout = ({ children }) => (
  <div className="page">
    <Header />
    <div className="main">
      <div className="content">{children}</div>
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
