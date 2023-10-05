import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context";
import { HashRouter } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import CreateAccount from "./createaccount";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Balance from "./balance";
import AllData from "./alldata";
import Transactions from "./transactions";
import { initAuth } from "./firebase";
import "./App.css";

function App() {
  useEffect(() => {
    initAuth(); // Initialize Firebase authentication
  }, []);
  return (
    <HashRouter>
      <div>
        <NavBar />
        <UserContext.Provider value={{ users: [] }}>
          <div className="container" style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/CreateAccount/" element={<CreateAccount />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/deposit/" element={<Deposit />} />
              <Route path="/withdraw/" element={<Withdraw />} />
              <Route path="/balance/" element={<Balance />} />
              <Route path="/alldata/" element={<AllData />} />
              <Route path="/transactions/" element={<Transactions />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
