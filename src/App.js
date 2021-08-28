import React from "react";
import './App.css';
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from './components/Header';
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

import { GlobalPorvider } from "./contex/GlobalState";

function App() {
  return (
    <GlobalPorvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalPorvider>
  );
}

export default App;
