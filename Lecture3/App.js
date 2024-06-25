import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1>Heading from JSX</h1>

const TitleComponent = () => (
    <h1>Learn React</h1>
);

const HeadingComponent = () => (
    <div>
        <TitleComponent />
        <h3>Hello React</h3>
    </div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)