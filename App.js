import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header";
import Body  from "./components/Body";
/**
 *
 * Header
 *  --logo
 *  --nav items
 * Body
 * -- restaurant container
 * --restaurant card
 *  --logo
 * -res name,cusine,starts,delivery time
 */







const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
