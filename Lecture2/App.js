// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

const parent = React.createElement("div",{id:"parent"},[

    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i m h1 tag"),
        React.createElement("h2",{},"i m h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i m h1 tag"),
        React.createElement("h2",{},"i m h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)