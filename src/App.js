import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Blogs from "./Blogs"
import HomePage from "./HomePage"
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Blogs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
