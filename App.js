import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";

// AppLayout component to show: Header, Body
const AppLayout = () => {
  return (
    <React.Fragment>
      <Body />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)


