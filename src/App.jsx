import React from "react";
import Hello from "./components/Hello";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 20 }}>
      <h1>My Mini React App</h1>
      <Hello name="Raju" />
    </div>
  );
}
