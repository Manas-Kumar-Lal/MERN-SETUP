// src/components/Counter.jsx
import React from 'react';
import useCounterStore from '../stores/counterStore/useCounterStore';

const Counter = () => {
    const count = useCounterStore((state) => state.count); // Access state
    const increment = useCounterStore((state) => state.increment); // Access actions
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
