import React from 'react'
import useCustomCounter from "./custom"
function App(){
    const data= useCustomCounter();
    const data1= useCustomCounter();
    return ( //they are independent to each other
        <React.Fragment>
            <h1>count up:{data.count}</h1>
            <button type="button" onClick={data.handleIncrement}>increment</button>
            
            <h1>count up:{data1.count}</h1>
            <button type="button" onClick={data1.handleIncrement}>increment</button>
        </React.Fragment>
    )

}
export default App;