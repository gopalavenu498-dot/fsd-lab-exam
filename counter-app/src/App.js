import React from 'react';

function App() {
    // The array of items
    const fruits = ["Apple", "Mango", "Orange", "Banana"];

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Map Function Example</h1>

            {/* The map function */}
            {fruits.map((fruit, index) => (
                <h2 key={index}>{fruit}</h2>
            ))}

        </div>
    );
}

export default App;