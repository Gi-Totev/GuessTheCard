import React from "react";
import { Layout, Board, Info } from "./components";

const App = () => {
  return (
    <div
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <Info />
      <Layout>
        <Board />
      </Layout>
    </div>
  );
};

export default App;
