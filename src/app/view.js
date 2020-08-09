import React from "react";
import { connect } from "react-redux";
import BiscuitMachine from "../components/biscuitMachine";

export default function Application() {
  return (
    <div className="Application">
      <header className="Application-header">
        <h1>The biscuit machine</h1>
        <BiscuitMachine />
      </header>
    </div>
  );
}
