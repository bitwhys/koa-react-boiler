import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

async function renderApp() {
  const rootEl = document.getElementById("root")
  if (!(rootEl instanceof Element)) {
    throw new Error("invalid type")
  }

  ReactDOM.render(<App />, rootEl)
}

renderApp()

// TODO: once we have routes, activate this code
// if (module.hot) {
//   module.hot.accept('./routes', () => {
//     renderApp();
//   });
// }
