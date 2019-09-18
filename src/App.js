import React, { useState } from "react";
// import Hello from './sayHello';
// import Tweet from "./tweet.js";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <buttom onClick={() => dispatch(decrement())}>-</buttom>
      {isLogged ? <h3>Valuble information I shouldn't see</h3> : ""}
    </div>
  );

  // const sayHello = () => {
  //   console.log("hello");
  // }

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const [user, setUser] = useState({
  //   name: 'Alex',
  //   age: 25,
  //   posts: ['my first post', 'my lovely summer']
  // });

  // const increment = () => {
  //   setCount(count+1);
  //   // setRed(true);
  //   setRed(true);
  // };

  // return(
  //   <div className="app">
  //   {/* <Tweet name="Alex" message="This is Alex Tweet"/>
  //   <Tweet name="kevin" message= "I'm the true"/>
  //   <Tweet name="Dev jorge" message= "This is page Tweet"/>
  //   <Tweet name="Smosh" message= "My new course is avalible"/> */}
  //   <h1 className={isRed ? 'red' : ""}>Change my Color!</h1>
  //   <button onClick={increment}>Increment</button>
  //   <h1>{count}</h1>
  //   </div>
  // );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
