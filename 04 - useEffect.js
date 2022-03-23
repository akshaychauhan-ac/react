import React, {useState, useEffect} from "react";
import randomcolor from "randomcolor";

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            // setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => clearInterval(intervalId);
        /* by adding this "cleanup method" this is equivalent of componentDidUnmount */
    }, []);
    
    useEffect(() => {
        setColor(randomcolor());
    }, [count]); //equivalent of componentDidUpdate lifecycle method
    
    useEffect(() => {
        setColor(randomcolor());
    }, []); //equivalent of componentDidMount lifecycle method
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    );
}

export default App;