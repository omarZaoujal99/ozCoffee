import React from "react";
import { Section1 } from "./pageComponents/section1";
import { Header } from "./pageComponents/header";
import background from "./images/bigBack.jpeg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "reapeat-y",
      }}
    >
      <Header />
      <main>
        <Section1 />
      </main>
    </div>
  );
}

export default App;
