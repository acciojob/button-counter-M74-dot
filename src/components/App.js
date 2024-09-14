import React from 'react';
  
const App = () =>  {
    const [count,setCount] = useState(0);
    function handleIncrement(){
      setCount(count+1)
    }
	return (
	  <div id="main">
      <p>Button clicked {count} times</p>
      <button onClick={handleIncrement}>Increment</button>
	  </div>
	);
}
  
  export default App;

