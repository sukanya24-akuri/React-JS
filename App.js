//  const heading=React.createElement("h1",
//    {
//     id:"heading",xyz:"abc"},
//  "Hello world");

// const parent=React.createElement(
//    "div",{
//       id:"parent"
//    },React.createElement("div",{
//       id:"child"},[
//       React.createElement("h1",{},"Iam h1 tag"),
//       React.createElement("h2",{},"I'm h2 tag")
//       ]
//    )
// );
import React from "react";
import ReactDOM from "react-dom/client";

//const heading=React.createElement("h1",{id:"heading"},"Namaste Dev");
//  const jsxHeading=<h1 className="head">Namaste Js</h1>
//  console.log(jsxHeading);

//REACT ELEMENT
const heading=(
    <h1 className="head">React element</h1>
);

//NORMAL FUNCTION
const Title=function(){
    return(
        <h1>Normal function</h1>
    )
}

//REACT FUCTIONAL COMPONENT
const HeadingComponent=()=>(
<div id="container">
   {<Title/>}
   {Title()}
   {1244+97*52/2}
<h1 className="heading">React functional component</h1>
</div>
);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);



