import React from 'react';

function App() {
    // 1. Create the variable
    const name = "Noor";

    // 2. Use backticks (template literal)
    const message = `Welcome ${name}`;

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>String Literal Example</h1>

            {/* 3. Display the result */}
            <h2>{message}</h2>
        </div>
    );
}

export default App;