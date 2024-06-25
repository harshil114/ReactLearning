import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1>Heading from JSX</h1>

const TitleComponent = () => (
    <h1>Learn React</h1>
);
const number = 100;
const HeadingComponent = () => (
    <div>
        <h4>{number + number}</h4>
        <h4>{10 + 20}</h4>
        <TitleComponent />
        <h3>Hello React</h3>
    </div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)