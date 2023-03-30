//import './App.css'
import { SignInButton, ethos } from "ethos-connect";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./Pages/Account/Account";
import Collections from "./Pages/Collections/Collections";
import MainPage from "./Pages/MainPage/MainPage";


function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/collections" component={Collections} />
        <Route path="/account" component={Account} />
      </Switch>
    </Router>
    </div>
  )
}

export default App